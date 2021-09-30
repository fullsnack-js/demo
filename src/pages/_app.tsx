import Head from "next/head"
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App;
