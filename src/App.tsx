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
import bg1 from "./assets/chart.png"
import collage_sp from "./assets/collage_sp.png"
import collage_pc from "./assets/collage_pc.png"
import { Tokenomics } from "./components/Tokenomics"
import { Memes } from "./components/Memes"
import Autoplay from "embla-carousel-autoplay"

function App() {
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
          JAPAN is Back!
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
              As the Japanese yen continues to dive lower and lower, $JAPAN has
              arrived to bring back the wealth and prosperity of Japan.
              <br />
              We are ushering in a new Bubble, this time with Nihonjins, Gajins,
              Degens and Otakus from around the world uniting to celebrate the
              culture that we love in the only way we know how.
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
            $JAPAN is more than just a meme coin.
          </Heading>
          <Text mt={3} fontWeight="bold" px={5}>
            It is a license for every cryptoite from Tokyo and around the world
            to party like they’re at Juliana’s Tokyo.
            <br />
            Initially set up as an effort to drum up excitement and create a
            budget for Farcon Tokyo, $JAPAN has expanded its mission to be a
            token that anyone, wherever they may be, to be able to bask in the
            euphoria of the next Bubble.
          </Text>
        </Container>
      </Box>

      <Memes />

      <Heading as="h2" textAlign="center" mb={2}>
        JOIN US
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
            Buy $JAPAN
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
            Warpcast
          </Button>
        </Link>
      </Center>

      <Box backgroundColor="japan.400" mt={10}>
        <Container py={10}>
          <Text fontSize="lg" color="white">
            $JAPAN is a party token made for entertainment purposes only.
            <br />
            We do not guarantee any financial returns from purchasing $JAPAN.
            DYOR.
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default App
