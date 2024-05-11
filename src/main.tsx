import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ChakraProvider } from "@chakra-ui/react"
import { Header } from "./components/Header.tsx"
import { chakraTheme } from "./config/chakra.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
