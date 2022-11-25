import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function TextCtaSection() {
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
            <div className="textCtaSection" key={data.id}>
                {data?.txtCtaSection.map((section) => (
                    <div className="textCtaSection__inner-cntr" key={section.id}> 
                        <div className="headline-cntr">
                            <h2>{section.headline}</h2>   
                        </div>    
                                    
                        <div className="txt-cntr">
                            <p className="subheader">{section.subheadline}</p>
                            <p>{section.text}</p>

                            {section?.link.map((link) => (
                                <button className="cta-btn" key={link.id}>
                                    {link.text}
                                </button>
                            ))}                            
                        </div>

                        <div className="img-cntr">
                            {section?.img.map((img) => (
                              <Image key={img.id} src={img.src} alt={img.alt} width={100} height={100} />
                            ))}                              
                        </div>
                    
                    </div>            
                ))} 
            </div>
        
        ))}  
        </>
    )
}