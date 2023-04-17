import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Next.js Boilerplate"
        description="This is a next.js project boilerplate"
      />
      <h1 className="text-lg text-purple-800">Hello world</h1>
    </>
  )
}
