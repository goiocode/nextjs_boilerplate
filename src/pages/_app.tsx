import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          url: 'http://localhost:3000',
          siteName: 'Next.js Boilerplate'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
