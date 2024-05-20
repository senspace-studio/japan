import { Button, Frog } from "frog"
import { devtools } from "frog/dev"
import { serveStatic } from "frog/serve-static"
// import { neynar } from 'frog/hubs'
import { handle } from "frog/vercel"
import { validateAction } from "../lib/neynar.js"
import {
  getAirdrop,
  getAirdropIds,
  getMerkleProof,
  isAmountLeft,
  isClaimed,
  isEligible,
} from "../lib/mintclub.js"
import JSONBig from "json-bigint"
import { Address, formatEther } from "viem"
import { MERKLE_DELIVERY_ABI } from "../abi.js"
import { APP_URL, MERKLE_DISTRIBUTE_CONTRACT } from "../config.js"

type State = {
  airdrops: string
  currentIndex: number
  walletAddress: Address
}

export const app = new Frog<{ State: State }>({
  assetsPath: "/",
  basePath: "/api",
  initialState: {
    airdrops: "",
    currentIndex: 0,
  },
})

app.frame("/", (c) => {
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          backgroundImage: `url(${APP_URL}/original.jpg)`,
          backgroundSize: "80% 100%",
          backgroundPosition: "center 10%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
            backgroundColor: "#bc002d",
          }}
        >
          $JAPAN Shower
        </div>
      </div>
    ),
    imageAspectRatio: "1:1",
    intents: [<Button action="/airdrop">Check Eligibility</Button>],
  })
})

app.frame("/airdrop", async (c) => {
  let walletAddress = c.previousState.walletAddress

  if (!walletAddress) {
    const {
      trustedData: { messageBytes },
    } = await c.req.json()
    const validatedData = await validateAction(messageBytes)
    walletAddress = validatedData.action.interactor.verified_addresses
      .eth_addresses[0] as Address
  }
  if (!walletAddress) {
    return c.res({
      image: (
        <div
          style={{
            alignItems: "center",
            backgroundImage: `url(${APP_URL}/not-eligible.jpg)`,
            backgroundSize: "80% 100%",
            backgroundPosition: "center 10%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "100%",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 40,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              marginTop: 500,
              padding: "0 220px",
              whiteSpace: "pre-wrap",
              backgroundColor: "#bc002d",
            }}
          >
            No More Airdrops
          </div>
        </div>
      ),
      imageAspectRatio: "1:1",
      intents: [
        <Button.Link href="https://mint.club/token/base/%F0%9F%87%AF%F0%9F%87%B5">
          Buy $JAPAN
        </Button.Link>,
      ],
    })
  }

  const airdropIds = await getAirdropIds()

  const airdrops = (
    await Promise.all(
      airdropIds.map(async (id) => {
        const airdrop = await getAirdrop(id)
        const beforeEnd = airdrop.endTime > Date.now() / 1000
        if (!beforeEnd) return { id, active: false, airdrop }
        const eligible =
          airdrop.merkleRoot ===
          "0x0000000000000000000000000000000000000000000000000000000000000000"
            ? true
            : await isEligible(walletAddress, airdrop, id)
        const claimed = await isClaimed(walletAddress, id)
        const amountLeft = await isAmountLeft(id)

        return {
          id,
          active: eligible && !claimed && amountLeft,
          airdrop,
        }
      })
    )
  )
    .filter((a) => a.active)
    .sort((a, b) => a.airdrop.endTime - b.airdrop.endTime)
  const currentIndex = c.previousState.currentIndex

  c.deriveState((prevState) => {
    prevState.airdrops = JSONBig.stringify(airdrops)
    prevState.walletAddress = walletAddress
    prevState.currentIndex += 1
  })

  if (airdrops.length === 0 || !airdrops[currentIndex]) {
    return c.res({
      image: (
        <div
          style={{
            alignItems: "center",
            backgroundImage: `url(${APP_URL}/not-eligible.jpg)`,
            backgroundSize: "80% 100%",
            backgroundPosition: "center 10%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "100%",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 40,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              marginTop: 500,
              padding: "0 220px",
              whiteSpace: "pre-wrap",
              backgroundColor: "#bc002d",
            }}
          >
            No More Airdrops
          </div>
        </div>
      ),
      imageAspectRatio: "1:1",
      intents: [
        <Button.Link href="https://mint.club/token/base/%F0%9F%87%AF%F0%9F%87%B5">
          Buy $JAPAN
        </Button.Link>,
      ],
    })
  } else {
    const airdrop = airdrops[currentIndex]
    return c.res({
      image: (
        <div
          style={{
            alignItems: "center",
            backgroundImage: `url(${APP_URL}/original.jpg)`,
            backgroundSize: "80% 100%",
            backgroundPosition: "center 10%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            height: "100%",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#bc002d",
              fontSize: 30,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              marginTop: 30,
              padding: "20px 320px 0",
              whiteSpace: "pre-wrap",
              backgroundColor: "#ffffffad",
            }}
          >
            {`for ${airdrop.airdrop.title}`}
          </div>
          <div
            style={{
              color: "#bc002d",
              fontSize: 50,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              padding: "0 320px",
              whiteSpace: "pre-wrap",
              backgroundColor: "#ffffffad",
              fontWeight: "bold",
            }}
          >
            {`${Math.ceil(
              Number(formatEther(airdrop.airdrop.amountPerClaim))
            )} $JAPAN`}
          </div>
        </div>
      ),
      imageAspectRatio: "1:1",
      intents: [
        <Button.Transaction action="/airdrop" target="/claim">
          Claim
        </Button.Transaction>,
        <Button action="/airdrop">Next</Button>,
      ],
    })
  }
})

app.transaction("/claim", async (c) => {
  const { airdrops, currentIndex } = c.previousState
  const airdrop = JSONBig.parse(airdrops)[currentIndex - 1]

  const merkleProof =
    airdrop.airdrop.merkleRoot ===
    "0x0000000000000000000000000000000000000000000000000000000000000000"
      ? []
      : await getMerkleProof(c.previousState.walletAddress, airdrop.airdrop)

  return c.contract({
    abi: MERKLE_DELIVERY_ABI,
    functionName: "claim",
    args: [airdrop.id, merkleProof],
    chainId: "eip155:8453",
    to: MERKLE_DISTRIBUTE_CONTRACT,
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== "undefined"
const isProduction = isEdgeFunction || import.meta.env?.MODE !== "development"
devtools(app, isProduction ? { assetsPath: "/.frog" } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
