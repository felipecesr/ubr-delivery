import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import { Hotjar } from '../components/Hotjar';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Uruburetama Delivery</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/style.css" />
          <GoogleAnalytics />
          <Hotjar />
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
