import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

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
      <main className={`${roboto.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
