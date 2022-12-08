import React, { useState, useEffect } from 'react';
import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselPodcasts from './SwiperCarouselPodcasts';

export default function PodcastSection() {
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
            const response = await fetch("/data/components/podcastData.json");
            const data = await response.json();
            setArticleData(data);             
        }       
        getData();        
    }, []);

    return (
        <>
        {sectionData.map((data) => (
            <section className="textSection" key={data.id}>
                {data?.podcastSection.map((data) => (
                    <TagHeadlineSubheadline key={data.id} data={data}/>      
                ))}  
            </section>   
        ))}
        
        <section className="video-section">
            {/* {sectionData.map((data) => (
                <div key={data.id} className="video-section-main">
                    {data?.podcastSection.map((section) => (
                        <div key={section.id} className="video-section-main__feature-cntr">
                            <div className="video-section-main__feature-cntr__feature">
                                {section.articles
                                .filter((data) => data.styleTag.includes('feature'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))}
                            </div>  
                            <div className="video-section-main__feature-cntr__regular">
                            </div>   
                        </div>
                    ))}
                </div>
            ))} */}
            <SwiperCarouselPodcasts/>                                  
        </section>
        </>
    )
}