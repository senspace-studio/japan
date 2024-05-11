import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { Pie } from "react-chartjs-2"
import abe from "../assets/abe.png"
import { Chart, ArcElement, Legend } from "chart.js"
Chart.register(ArcElement)
Chart.register(Legend)

export const Tokenomics: FC = () => {
  return (
    <Box pt={[10, 14]} pb={[5, 7]}>
      <Box>
        <Heading color="japan.400" textAlign="center" mb="50px">
          <Box
            as="span"
            position="relative"
            display="inline-block"
            _before={{
              content: '" "',
              width: "65px",
              height: "5px",
              backgroundColor: "black",
              display: "inline-block",
              position: "absolute",
              top: 3.5,
              left: "0",
              transform: "rotate(20deg)",
            }}
          >
            ABENOMICS
            <Box position="absolute" bottom={-8} left={-3} as="span">
              TOKE
            </Box>
          </Box>
        </Heading>

        <Grid
          backgroundImage={`url(${abe})`}
          backgroundColor="rgba(255,255,255,.8)"
          backgroundBlendMode="lighten"
          backgroundSize="cover"
          textAlign="center"
          py={10}
          gap={4}
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Ticker
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              $JAPAN
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Total Supply
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              81,000,000,000
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Trading Royalty
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              0.3%
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box mt={10}>
        <Pie
          style={{ margin: "0 auto" }}
          datasetIdKey="id"
          data={{
            labels: ["Community: 90%", "Ecosystem: 4%", "Airdrops: 1%"],
            datasets: [
              {
                data: [95, 4, 1],
                backgroundColor: ["#bc002d", "#43ffd2", "#00bc8f"],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </Box>

      <Accordion m="20px auto" maxW="400px">
        <AccordionItem>
          <Heading as="h3">
            <AccordionButton fontSize="lg" fontWeight="bold">
              <Box as="span" flex="1" textAlign="left">
                Details
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel>
            <Box as="span" fontWeight="bold">
              95% Community
            </Box>
            <br />
            This is not for our bags. This is for the culture.
            <br />
            <br />
            <Box as="span" fontWeight="bold">
              1% Aidrops
            </Box>
            <br />
            Airdrop 1 (25% of 1%)
            <br />
            Tokyo DAO NFT holders
            <br />
            Farcon Summit pass holders
            <br />
            /tokyowip
            <br />
            /farcon
            <br />
            /farcon-tokyo
            <br />
            /Japan
            <br />
            /Japanese
            <br />
            /tokyo
            <br />
            /jp
            <br />
            /kyoto
            <br />
            /anime-manga
            <br />
            /ramen
            <br />
            /yakult1000
            <br />
            /farcon-nyc
            <br />
            <br />
            Airdrop 2-4 (25% of 1% each)
            <br />
            TBD
            <br />
            <br />
            <Box as="span" fontWeight="bold">
              4% Ecosystem
            </Box>
            <br />
            Ecosystem and community including an estimated 50% (of 4%) towards
            Farcon Tokyo 2025
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
