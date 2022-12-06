import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';

export default function TextBlock() {
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
            <section className="textBlock" key={data.id}>
                {data?.txtBlock.map((section) => (
                    <div key={section.id} className="textBlock__cntr">
                        <div className="textBlock__cntr__inner-cntr"> 

                            <div className="textBlock__cntr__inner-cntr__col-1">
                                <div className="textBlock__cntr__inner-cntr__col-1__headline">
                                    <h2>{section.headline}</h2>
                                </div>    
                                <div className="textBlock__cntr__inner-cntr__col-1__text">
                                    {section?.textSec.map((text) => (
                                        <p key={text.id}>
                                            {text.text}
                                        </p>

                                    ))}  
                                    {/* <p>{section.text}</p> */}
                                </div>                                                               
                            </div>

                            <div className="textBlock__cntr__inner-cntr__col-2">
                                <div className="img-cntr">
                                    <div className="img-cntr__inner-cntr">
                                        {section?.img.map((img) => (
                                            <Image key={img.id} src={img.src} alt={img.alt} width={100} height={100} />
                                        ))}                              
                                    </div>
                                </div>
                                <div className="cta-btn-cntr ">
                                    {section?.link.map((link) => (
                                        <CtaBtn key={link.id} link={link}/>                          
                                    ))}
                                </div>
                            </div>
                        </div>   
                    </div>         
                ))} 
            </section>        
        ))}  
        </>
    )
}