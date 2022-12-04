import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';
// import SwiperSection from './SwiperCarousel';
import SwiperCarousel from './SwiperCarousel';
import VideoArticle from './VideoArticle';

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
                        <div className="textSection__tag">
                            {/* <hr/> */}
                            <p>{section.tag}</p>
                        </div>
                        
                        <div className="textSection__cntr" key={section.id}> 
                        <div className="textSection__cntr__inner-cntr grid-cntr grid-1-2">
                            <div className="grid-1-2__col-1 headline-cntr">
                                <h2>{section.headline}</h2>
                            </div>    
                                        
                            <div className="grid-1-2__col-2 txt-cntr">
                                <div className="txt-cntr__inner-cntr">                            
                                    <div className="subheader">
                                        <p>
                                            <span>
                                                <svg width="48" height="9" viewBox="0 0 48 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4.5" cy="4.5" r="3.7" fill="#183428" stroke="#183428" stroke-width="1.6"/>
                                                    <line x1="3" y1="4.25" x2="48" y2="4.25" stroke="#183428" stroke-width="1.5"/>
                                                </svg>
                                            </span>
                                            {section.subheadline}
                                        </p>                                
                                    </div>
                                </div>                                                               
                            </div>  
                            </div>

                        </div>      

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