import { mintclub } from "mint.club-v2-sdk"
import { MERKLE_DISTRIBUTE_CONTRACT, TOKEN_ADDRESS } from "../config.js"
import {
  Address,
  createPublicClient,
  getContract,
  http,
  keccak256,
  sha256,
} from "viem"
import { base } from "viem/chains"
import { MERKLE_DELIVERY_ABI } from "../abi.js"
import axios from "axios"
import { MerkleTree } from "merkletreejs"

export type Airdrop = {
  token: `0x${string}`
  isERC20: boolean
  walletCount: number
  claimCount: number
  amountPerClaim: bigint
  startTime: number
  endTime: number
  owner: `0x${string}`
  refundedAt: number
  merkleRoot: `0x${string}`
  title: string
  ipfsCID: string
}

export const getAirdropIds = async () => {
  const airdrops = mintclub.network("base").airdrop.getAirdropIdsByToken({
    token: TOKEN_ADDRESS,
  })
  return airdrops
}

export const getAirdrop = async (id: bigint) => {
  const airdrop = await mintclub
    .network("base")
    .airdrop.getAirdropById(Number(id))
  return airdrop
}

const publicRPC = createPublicClient({
  chain: base,
  transport: http(
    "https://base-mainnet.g.alchemy.com/v2/8hXKjqbmswYlOFLHm7Sq8vRO3rNIf5Vz"
  ),
})

const merkleDeliveryContract = () => {
  return getContract({
    abi: MERKLE_DELIVERY_ABI,
    address: MERKLE_DISTRIBUTE_CONTRACT,
    client: publicRPC,
  })
}

export const getMerkleProof = async (
  walletAddress: Address,
  airdrop: Airdrop
) => {
  const { data: addresses } = await axios<`0x${string}`[]>(
    `https://mint.club/api/ipfs/whitelist?cid=${airdrop.ipfsCID}`
  )

  const tree = new MerkleTree(
    addresses.map((a) => keccak256(a)),
    keccak256,
    { sortPairs: true }
  )
  const proof = tree.getHexProof(keccak256(walletAddress)) as `0x${string}`[]

  return proof
}

export const isAmountLeft = async (airdropId: bigint) => {
  try {
    const contract = merkleDeliveryContract()
    const amountLeft = await contract.read.getAmountLeft([airdropId])

    return Number(amountLeft) > 0
  } catch (error) {
    return false
  }
}

export const isEligible = async (
  address: Address,
  airdrop: Airdrop,
  airdropId: bigint
) => {
  try {
    const merkleProof = await getMerkleProof(address, airdrop)
    const contract = merkleDeliveryContract()
    const eligible = await contract.read.isWhitelisted([
      airdropId,
      address,
      merkleProof,
    ])

    console.log(airdrop.title)

    return eligible
  } catch (error) {
    console.log(error)
    return false
  }
}

export const isClaimed = async (address: Address, airdropId: bigint) => {
  try {
    const contract = merkleDeliveryContract()
    const claimed = await contract.read.isClaimed([airdropId, address])

    return claimed
  } catch (error) {
    return false
  }
}
