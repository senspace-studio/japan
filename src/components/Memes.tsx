import { FC } from "react"
import meme1 from "../assets/memes/1.png"
import meme2 from "../assets/memes/2.png"
import meme3 from "../assets/memes/3.png"
import meme4 from "../assets/memes/4.png"
import meme5 from "../assets/memes/5.png"
import meme6 from "../assets/memes/6.png"
import { Box, Container, Image } from "@chakra-ui/react"

export const Memes: FC = () => {
  return (
    <Box mt="-200px" height="920px" overflow="hidden">
      <Container position="relative">
        <Image src={meme1} position="absolute" right={5} />
        <Image src={meme2} position="absolute" top={120} zIndex={1} />
        <Image src={meme3} position="absolute" top={340} right={10} />
        <Image src={meme4} position="absolute" top={500} />
        <Image src={meme5} position="absolute" top={500} right={-3} />
        <Image src={meme6} position="absolute" top={680} />
      </Container>
    </Box>
  )
}
