import "styles/globals.css";

import type { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Arial, Helvetica,"Aref Ruqaa" ,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
