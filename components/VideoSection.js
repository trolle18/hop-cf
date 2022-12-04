import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';
// import SwiperSection from './SwiperCarousel';
import SwiperCarousel from './SwiperCarousel';
import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function VideoSection() {
    const [sectionData, setSectionData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/homePageData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    return (
        <>
            {sectionData.map((data) => (
                <section className="textSection" key={data.id}>
                    {data?.videoSection.map((section) => (
                        <>
                        <TagHeadlineSubheadline key={section.id} section={section}/>     

                        <div className="video-section">
                            <div className="video-section__cntr">
                                {section.articles?.map((data) => (
                                
                                    <VideoArticle key={data.id} data={data}/>

                                ))}   
                            </div>
                        </div> 
                        </>     
                    ))} 
                </section>        
            ))}
        </>
    )
}