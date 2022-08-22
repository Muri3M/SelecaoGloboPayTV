import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import ResetCss from "../style/ResetCss";
import theme from "../style/Theme";
import Theme from "../style/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Paredão BBB</title>
        <meta name='Paredão BBB' content='Votação do paredão' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ResetCss />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
