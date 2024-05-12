import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"
import { FC, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { MdLanguage } from "react-icons/md"

export const Header: FC = () => {
  // switch language
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation()

  const switchLanguage = useCallback(() => {
    if (language === "ja") {
      changeLanguage("en")
      window.history.pushState({}, "", window.location.href.split("?")[0])
    } else {
      changeLanguage("ja")
      window.history.pushState(
        {},
        "",
        `${window.location.href.split("?")[0]}?lang=ja`
      )
    }
  }, [language, changeLanguage])

  useEffect(() => {
    const url = new URL(window.location.href)
    const lang = url.searchParams.get("lang")
    if (lang) {
      changeLanguage(lang)
    }
  }, [])

  return (
    <header>
      <Grid
        gridTemplateColumns="1fr 1fr"
        p={2}
        alignItems="center"
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex={100}
        bg="white"
      >
        <Flex alignItems="center">
          <Image src="/logo.png" width={["40px", "50px"]} />
          <Text fontWeight="bold" color="japan.400" fontSize={["md", "xl"]}>
            $JAPAN
          </Text>
        </Flex>
        <Flex gap={[3, 4]} alignItems="center" justifyContent="flex-end">
          <Icon
            onClick={switchLanguage}
            as={MdLanguage}
            fontSize={["3xl", "4xl"]}
            color="japan.400"
            cursor="pointer"
          />
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
              {t("top.buy")}
            </Button>
          </Link>
        </Flex>
      </Grid>
      <Box w="100%" h={["64px", "66px"]} />
    </header>
  )
}
