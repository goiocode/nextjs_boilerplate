import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <meta name="theme-color" content="#121214" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
