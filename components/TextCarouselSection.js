import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';
// import SwiperSection from './SwiperCarousel';
import SwiperCarousel from './SwiperCarousel';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function TextCarouselSection() {
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
        {/* <section className="section-wrapper"> */}
            {sectionData.map((data) => (
                <section className="textSection" key={data.id}>
                    {data?.txtSliderSection.map((section) => (
                        <>
                        <TagHeadlineSubheadline key={section.id} section={section}/>
                        
                        </>     
                    ))} 
                    <SwiperCarousel/>
                </section>        
            ))}
        {/* </section> */}
        </>
    )
}