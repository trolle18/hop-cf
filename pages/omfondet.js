import React, { useState, useEffect } from 'react';
import NewsletterBlock from '../components/NewsletterBlock'
import AboutPurposeSection from '../components/AboutPurposeSection';
import SubpageHero from '../components/SubpageHero';
import TagHeadlineSubheadline from '../components/TextSectionModules/TagHeadlineSubheadline';
import SwiperCarousel from '../components/SwiperCarousel';
import TextBevillingSection from '../components/TextBevillingSection';
import TextFondetsMidler from '../components/TextFondetsMidler';
import BlockGridSection from '../components/BlockGridSection';


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

            {data.otherProjectsSection?.map((data) => ( 
              <BlockGridSection key={data.id} data={data}/>
            ))} 

            {data.newsletterBlock?.map((data) => ( 
              <NewsletterBlock key={data.id} data={data}/>
            ))} 

        </main>
      ))}
    </>
  )
}
