import Head from 'next/head'
import ArticleSection from '../components/ArticleSection'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import TextCtaSection from '../components/TextCtaSection'

export default function Home() {
  return (
    <>
    <Nav/>
    <div>
      <Head>
        <title>HOP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="page">
        <Hero/>
        <TextCtaSection/>
        <ArticleSection/>

      </main>
 
    </div>
    </>
  )
}
