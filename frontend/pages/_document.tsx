import * as React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style>{`@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600;700;800;900&display=swap);`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
