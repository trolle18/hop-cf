import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';

export default function TextEventSection() {
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
                {data?.txtEventSection.map((section) => (
                    <div className="" key={section.id}> 
                        <div className="headline-cntr">
                            <h2>{section.headline}</h2>
                        </div>    
                        <div className="mason-grid">
                            {section?.articles.map((article) => (
                                <article key={article.id} className="mason-grid__event-article">
                                
                                    <div className="img-cntr">
                                        {article?.img.map((img) => (
                                            <Image key={img.id} src={img.src} alt={img.alt} width={100} height={100} />
                                        ))}                              
                                    </div>    
                                    <div className="txt-cntr">
                                        <p className="txt-cntr__tag">{article.tag}</p>
                                        <p className="txt-cntr__headline">{article.headline}</p>
                                        {article?.link.map((link) => (
                                            <a key={link.id} href={link.url}>{link.text}</a>
                                        ))} 
                                    </div>
                                </article>                         
                            ))}   
                        </div>
                    </div>            
                ))} 
            </section>        
        ))}  
        </>
    )
}