import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import TextCarouselSection from '../components/TextCarouselSection'
import NewsletterBlock from '../components/NewsletterBlock'
import AboutPurposeSection from '../components/AboutPurposeSection';
import SubpageHero from '../components/SubpageHero';
import Nav from '../components/Nav';
import TagHeadlineSubheadline from '../components/TextSectionModules/TagHeadlineSubheadline';
import SwiperCarousel from '../components/SwiperCarousel';
import TextBevillingSection from '../components/TextBevillingSection';
import TextFondetsMidler from '../components/TextFondetsMidler';


export default function About() {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/aboutpage')
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
      {sectionData.aboutpageData.map((data) => (    
        <main className="page" key={data.id}>
            {data.hero?.map((data) => ( 
              <SubpageHero key={data.id}  data={data}/>
            ))}  
            
            {data.purposeSection?.map((data) => ( 
              <AboutPurposeSection key={data.id} data={data}/>
            ))}   

            {data.txtSliderSection?.map((data) => ( 
              <section className="textSection" key={data.id}>
                    <TagHeadlineSubheadline data={data}/>
                    <SwiperCarousel data={data}/>
                </section>      
            ))} 

            {data.txtBevillingSection?.map((data) => ( 
              <TextBevillingSection key={data.id} data={data}/>
            ))} 

            {data.midlerSection?.map((data) => ( 
              <TextFondetsMidler key={data.id} data={data}/>
            ))} 

            {data.newsletterBlock?.map((data) => ( 
              <NewsletterBlock key={data.id} data={data}/>
            ))} 

        </main>
      ))}
    </>
  )
}
