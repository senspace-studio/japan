import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"
import useEmblaCarousel from "embla-carousel-react"
import hero1 from "./assets/hero/1.jpg"
import hero2 from "./assets/hero/2.jpg"
import hero3 from "./assets/hero/3.jpg"
import hero4 from "./assets/hero/4.jpg"
import hero5 from "./assets/hero/5.jpg"
import hero6 from "./assets/hero/6.jpg"
import hero7 from "./assets/hero/7.jpg"
import bg1 from "./assets/chart.png"
import collage_sp from "./assets/collage_sp.png"
import collage_pc from "./assets/collage_pc.png"
import { Tokenomics } from "./components/Tokenomics"
import { Memes } from "./components/Memes"
import Autoplay from "embla-carousel-autoplay"
import { Trans, useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        "(min-width: 768px)": {
          slidesToScroll: 2,
        },
      },
    },
    [
      Autoplay({
        stopOnInteraction: false,
        delay: 4000,
      }),
    ]
  )

  return (
    <>
      <Box ref={emblaRef} overflow="hidden">
        <Box display="flex">
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero1} />
          </Flex>
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero2} />
          </Flex>
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero3} />
          </Flex>
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero4} />
          </Flex>
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero5} />
          </Flex>
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero6} />
          </Flex>
          <Flex
            flex={["0 0 100%", "0 0 33.333%"]}
            minW="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={hero7} />
          </Flex>
        </Box>
      </Box>

      <Box
        overflow="hidden"
        backgroundColor="japan.400"
        position="relative"
        pt={[10]}
        pb={[14, 20]}
      >
        <Image
          zIndex={0}
          src={bg1}
          position="absolute"
          right={0}
          left={0}
          margin="0 auto"
          top={[0, "-30px"]}
          width={["100%", "500px"]}
        />
        <Heading
          as="h1"
          fontSize={["4xl", "5xl"]}
          textAlign="center"
          color="white"
        >
          {t("top.title")}
        </Heading>

        <Center color="japan.400" position="relative">
          <Box
            w={["90%", "600px"]}
            maxW="90%"
            backgroundColor="rgba(255,255,255,.85)"
            p={[6, 10]}
            borderRadius={20}
            mt={6}
          >
            <Heading textAlign="center" as="h2">
              $JAPAN
            </Heading>

            <Text fontSize={["md", "lg"]} mt={4} fontWeight="bold">
              <Trans>{t("top.description")}</Trans>
            </Text>
          </Box>
        </Center>
      </Box>

      <Image
        display={["block", "none"]}
        width="100%"
        margin="0 auto"
        src={collage_sp}
      />
      <Image
        display={["none", "block"]}
        width="100%"
        margin="0 auto"
        src={collage_pc}
      />

      <Tokenomics />

      <Box backgroundColor="#bc002d40" pt={10} pb="240px">
        <Container maxW="850px" color="japan.400">
          <Heading as="h2" px={5}>
            {t("top.statement")}
          </Heading>
          <Text mt={3} fontWeight="bold" px={5}>
            <Trans>{t("top.statement_description")}</Trans>
          </Text>
        </Container>
      </Box>

      <Memes />

      <Heading as="h2" textAlign="center" mb={2}>
        {t("top.join")}
      </Heading>
      <Center>
        <Link
          href="https://mint.club/token/base/%F0%9F%87%AF%F0%9F%87%B5"
          target="_blank"
        >
          <Button
            size="lg"
            backgroundColor="japan.400"
            color="white"
            borderRadius="full"
            py={5}
            px={10}
            fontSize="xl"
            width={250}
          >
            {t("top.buy")}
          </Button>
        </Link>
      </Center>
      <Center>
        <Link href="https://warpcast.com/~/channel/jp" target="_blank">
          <Button
            size="lg"
            backgroundColor="japan.400"
            color="white"
            borderRadius="full"
            py={5}
            px={10}
            fontSize="xl"
            width={250}
            mt={3}
          >
            {t("top.warpcast")}
          </Button>
        </Link>
      </Center>

      <Box backgroundColor="japan.400" mt={10}>
        <Container py={10}>
          <Text fontSize="lg" color="white">
            <Trans>{t("top.discramer")}</Trans>
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default App
