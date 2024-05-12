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
import { FC, useMemo } from "react"
import { Pie } from "react-chartjs-2"
import { Chart, ArcElement, Legend } from "chart.js"
import { Trans, useTranslation } from "react-i18next"
Chart.register(ArcElement)
Chart.register(Legend)

export const Tokenomics: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const isJa = useMemo(() => {
    return language === "ja"
  }, [language])

  return (
    <Box pt={[10, 20]} pb={[5, 20]}>
      <Heading color="japan.400" textAlign="center" mb="50px">
        <Box
          as="span"
          position="relative"
          display="inline-block"
          _before={{
            content: '" "',
            width: ["125px", isJa ? "110px" : "150px"],
            height: "5px",
            backgroundColor: "black",
            display: "inline-block",
            position: "absolute",
            top: 3.5,
            left: "0",
            transform: "rotate(10deg)",
          }}
          letterSpacing={isJa ? 2 : "auto"}
        >
          {t("top.bubblenomics")}
          <Box
            position="absolute"
            bottom={isJa ? -9 : -8}
            left={isJa ? -5 : 7}
            as="span"
          >
            {t("top.toke")}
          </Box>
        </Box>
      </Heading>

      <Grid
        maxW={["100%", "900px"]}
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gap={5}
        margin="0 auto"
        alignItems="flex-start"
      >
        <Grid
          backgroundColor="rgba(255,255,255,.8)"
          backgroundBlendMode="lighten"
          backgroundSize="cover"
          textAlign="center"
          py={10}
          gap={4}
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("top.ticker")}
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              $JAPAN
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("top.total_supply")}
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              81,000,000,000
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("top.trading_royalty")}
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              0.3%
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("top.initial_price")}
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              0.0₈81 WETH
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {t("top.final_price")}
            </Text>
            <Text fontWeight="bold" fontSize="3xl" color="japan.400">
              0.0₅81 WETH
            </Text>
          </Box>
        </Grid>
        <Box>
          <Pie
            style={{ margin: "0 auto" }}
            datasetIdKey="id"
            data={{
              labels: ["Community: 95%", "Ecosystem: 4%", "Airdrops: 1%"],
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
          <Accordion m="20px auto" maxW="400px">
            <AccordionItem>
              <Heading as="h3">
                <AccordionButton fontSize="lg" fontWeight="bold">
                  <Box as="span" flex="1" textAlign="left">
                    {t("top.tokenomics_detail_title")}
                  </Box>

                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <Trans>{t("top.tokenomics_detail_content")}</Trans>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  )
}
