import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Hero() {
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
            <div className="hero-cntr" key={data.id}>
                {data?.hero.map((hero) => (
                <div key={hero.id}>                    
                    <div className="hero-cntr__img-cntr">
                        <Image src={hero.imgSrc} alt="" width={100} height={100}/>
                    </div>
                    <div className="hero-cntr__txt-cntr">
                        {/* <h1>{hero.headline}</h1> */}
                        <p>{hero.text}</p>
                    </div>
                </div>            
                ))} 
            </div>
        
        ))}  
        </>
    )
}