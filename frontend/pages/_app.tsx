import type { AppProps } from "next/app";
import Head from "next/head";
import ResetCss from "../components/atoms/ResetCss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Paredão BBB</title>
        <meta name='Paredão BBB' content='Votação do paredão' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ResetCss />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
