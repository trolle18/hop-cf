import React, { useState, useEffect } from 'react';
// import Image from "next/image";
// import CtaBtn from './CTAbtn';
// // import SwiperSection from './SwiperCarousel';
// import SwiperCarousel from './SwiperCarousel';
import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselVideos from './SwiperCarouselVideos';

export default function VideoSection({ data }) {
    // const [sectionData, setSectionData] = useState([]);
    // const [articleData, setArticleData] = useState([]);

    // // Fetch data from JSON
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/homePageData.json");
    //         const data = await response.json();
    //         setSectionData(data);             
    //     }       
    //     getData();        
    // }, []);

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/components/videoArticles.json");
    //         const data = await response.json();
    //         setArticleData(data);             
    //     }       
    //     getData();        
    // }, []);

    return (
        <>
        {/* {sectionData.map((data) => ( */}
            <section className="textSection textSection-underlined" key={data.id}>
                {/* {data?.videoSection.map((data) => ( */}
                    <TagHeadlineSubheadline key={data.id} data={data}/>      
                {/* ))}   */}
            </section>   
        {/* ))} */}
        
        <section className="video-section">
            {/* {sectionData.map((data) => ( */}
                <div key={data.id} className="video-section-main">
                    {/* {data?.articles.map((section) => ( */}
                        <div className="video-section-main__feature-cntr">
                            <div className="video-section-main__feature-cntr__feature">
                                {data.articles
                                .filter((data) => data.styleTag.includes('feature'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))}
                            </div>  
                            <div className="video-section-main__feature-cntr__regular">
                            </div>   
                        </div>
                    {/* ))} */}
                </div>
            {/* ))} */}
            <SwiperCarouselVideos key={data.id} data={data} />                                  
        </section>
        </>
    )
}