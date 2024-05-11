import { Box, Button, Flex, Grid, Image, Link, Text } from "@chakra-ui/react"
import { FC } from "react"

export const Header: FC = () => {
  return (
    <header>
      <Grid gridTemplateColumns="1fr 1fr" p={2} alignItems="center">
        <Flex alignItems="center">
          <Image src="/logo.png" width={["40px", "50px"]} />
          <Text fontWeight="bold" color="japan.400" fontSize={["md", "xl"]}>
            $JAPAN
          </Text>
        </Flex>
        <Box textAlign="right">
          <Link
            href="https://mint.club/token/base/%F0%9F%87%AF%F0%9F%87%B5"
            target="_blank"
          >
            <Button
              backgroundColor="japan.400"
              color="white"
              borderRadius="full"
              size="lg"
              pt={1}
            >
              Buy $JAPAN
            </Button>
          </Link>
        </Box>
      </Grid>
    </header>
  )
}
