import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';

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
            <section className="textSection" key={data.id}>
                {data?.txtCtaSection.map((section) => (
                    <div key={section.id} className="textSection__cntr">
                    <div className="textSection__cntr__inner-cntr grid-cntr grid-2-2"> 
                        <div className="grid-2-2__col-1 headline-cntr">
                            <h2>{section.headline}</h2>
                            <h2>{section.headline2nd}</h2>   
                        </div>    
                                    
                        <div className="grid-2-2__col-2-4 txt-cntr">
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
                               
                                <p>{section.text}</p>
                                {section?.link.map((link) => (
                                    <CtaBtn key={link.id} link={link}/>                          
                                ))}   
                            </div>                                                               
                        </div>

                        <div className="grid-2-2__col-3 img-cntr">
                            {section?.img.map((img) => (
                              <Image key={img.id} src={img.src} alt={img.alt} width={100} height={100} />
                            ))}                              
                        </div>                    
                    </div>   
                    </div>         
                ))} 
            </section>        
        ))}  
        </>
    )
}