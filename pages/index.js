import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import TextCarouselSection from '../components/TextCarouselSection'
import VideoSection from '../components/VideoSection'
import TextBlock from '../components/TextBlock'
import NewsletterBlock from '../components/NewsletterBlock'
import PodcastSection from '../components/PodcastSection'
import PurposeSection from '../components/PurposeSection';
import LoadModal from '../components/LoadModal';
import Nav from '../components/Nav';

export default function Home() {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/homepage')
        .then((res) => res.json())
        .then((sectionData) => {
          setSectionData(sectionData)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!sectionData) return <p>No data</p>

  return (
    <>
      <Head>
        <title>HOP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>

      {sectionData.homepageData.map((data) => (
        
        <main className="page" key={data.id}>
          <LoadModal />

          {data.hero?.map((data) => ( 
            <Hero key={data.id}  data={data}/>
          ))}    
          
          {data.txtBlock?.map((data) => ( 
            <TextBlock key={data.id} data={data}/>
          ))}  

          {data.txtSliderSection?.map((data) => ( 
            <TextCarouselSection key={data.id} data={data}/>
          ))} 

          {data.purposeSection?.map((data) => ( 
            <PurposeSection key={data.id} data={data}/>
          ))} 
          
          {data.videoSection?.map((data) => ( 
            <VideoSection key={data.id} data={data}/>
          ))} 

          {data.podcastSection?.map((data) => ( 
            <PodcastSection key={data.id} data={data}/>
          ))} 

          {data.newsletterBlock?.map((data) => ( 
            <NewsletterBlock key={data.id} data={data}/>
          ))}       

      </main>
      ))}
    </>
  )
}
