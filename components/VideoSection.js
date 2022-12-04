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
                <>
                <section className="textSection" key={data.id}>
                    {data?.videoSection.map((section) => (
                        <TagHeadlineSubheadline key={section.id} section={section}/>      
                    ))}  
                </section>   

                <section className="video-section" key={data.id}>

                    <div className="video-section-main">
                    {data?.videoSection.map((section) => (
                        <div key={section.id} className="video-section-main__feature-cntr">
                            <div className="video-section-main__feature-cntr__feature">
                                {section.articles
                                .filter((data) => data.type.includes('feature'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))}
                            </div>  
                            <div className="video-section-main__feature-cntr__regular">
                            <p className="video-section-main__feature-cntr__regular__title">{section.text}</p>
                                {section.articles
                                    .filter((data) => data.type.includes('regular'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))}
                            </div>   
                        </div>
                    ))}
                    </div>                     
                </section>   
                </>     
            ))}
        </>
    )
}