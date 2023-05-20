import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ultra Express</title>
        <meta name='description' content="Ultra Express Courier Website"/>      
        <meta property='og:title' content='Ultra Express ' />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile-pic.png" />
        <meta property='og:description' content='Ultra Express Courier Website' />
        <meta property="og:url" content="https://ultraexpress.org" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
