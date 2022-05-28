import "../styles/globals.css";

import type { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    arabic: `"Aref Ruqaa" ,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
