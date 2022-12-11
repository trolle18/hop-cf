import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import TextCarouselSection from '../components/TextCarouselSection'
import NewsletterBlock from '../components/NewsletterBlock'
import AboutPurposeSection from '../components/AboutPurposeSection';
import SubpageHero from '../components/SubpageHero';
import TagHeadlineSubheadline from '../components/TextSectionModules/TagHeadlineSubheadline';
import SwiperCarousel from '../components/SwiperCarousel';
import TextBevillingSection from '../components/TextBevillingSection';
import TextFondetsMidler from '../components/TextFondetsMidler';
import BlockGridSection from '../components/BlockGridSection';
import TextBlock from '../components/TextBlock';
import ArticleSection from '../components/ArticleSection';
import SortArticleSection from '../components/SortArticleSection';
import SeeMoreCtaLink from '../components/SeeMoreCtaLink';
import LoadModal from '../components/LoadModal';


export default function Application() {
  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/applicationpage')
        .then((res) => res.json())
        .then((sectionData) => {
          setSectionData(sectionData)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p></p>
    if (!sectionData) return <p>No data</p>

  return ( 
    <>
      {sectionData.applicationpageData.map((data) => (    
        <main className="page" key={data.id}>

        <section className="modal-wrapper modal-theme-dark-red modal-hops-yellow">
            <LoadModal />
          </section>

          {data.hero?.map((data) => ( 
            <section className="hero-wrapper subpagehero-wrapper theme-midnight-green" key={data.id} >
              <SubpageHero data={data}/>
            </section>
          ))}  

          {data.txtBlock?.map((data) => ( 
            <section className="textSection" key={data.id} data={data}>
              <TagHeadlineSubheadline data={data}/>      
            </section>   
          ))} 

          {data.applicationArticles?.map((data) => ( 
            <SortArticleSection key={data.id} data={data}/>
          ))}   
          {data.txtBevillingSection?.map((data) => ( 
        
            <section className="textSection"  key={data.id}>
              <TagHeadlineSubheadline data={data}/>   
              <div className="textSection__cntr"> 
                <div className="seeMore-cntr">
                  <SeeMoreCtaLink data={data}/>
                </div> 
              </div>  
            </section>
          ))} 


          {data.otherProjectsSection?.map((data) => ( 
            <BlockGridSection key={data.id} data={data}/>
          ))} 

        </main>
      ))}
    </>
  )
}


