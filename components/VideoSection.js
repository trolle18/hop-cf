import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import CtaBtn from './CTAbtn';
// // import SwiperSection from './SwiperCarousel';
// import SwiperCarousel from './SwiperCarousel';
import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselVideos from './SwiperCarouselVideos';

export default function VideoSection() {
    const [sectionData, setSectionData] = useState([]);
    const [articleData, setArticleData] = useState([]);

    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/homePageData.json");
            const data = await response.json();
            setSectionData(data);             
        }       
        getData();        
    }, []);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/videoArticles.json");
            const data = await response.json();
            setArticleData(data);             
        }       
        getData();        
    }, []);

    return (
        <>
        {sectionData.map((data) => (
            <section className="textSection" key={data.id}>
                {data?.videoSection.map((section) => (
                    <TagHeadlineSubheadline key={section.id} section={section}/>      
                ))}  
            </section>   
        ))}
        
        <section className="video-section">
            {sectionData.map((data) => (
                <div key={data.id} className="video-section-main">
                    {data?.videoSection.map((section) => (
                        <div key={section.id} className="video-section-main__feature-cntr">
                            <div className="video-section-main__feature-cntr__feature">
                                {section.articles
                                .filter((data) => data.styleTag.includes('feature'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))}
                            </div>  
                            <div className="video-section-main__feature-cntr__regular">
                            {/* <p className="video-section-main__feature-cntr__regular__title">{section.text}</p> */}
                                {/* {section.articles
                                .filter((data) => data.styleTag.includes('regular'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))} */}
                                {/* <SwiperCarouselVideos />   */}
                            </div>   
                        </div>
                    ))}
                </div>
            ))}
            <SwiperCarouselVideos />                                  
        </section>
        </>
    )
}