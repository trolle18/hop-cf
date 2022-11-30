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
                <>
                    <div className="textSection__tag">
                    <hr/>
                        <p>{section.tag}</p>
                    </div>
                    <div className="textSection__cntr" key={section.id}> 
                    
                        <div className="headline-cntr">
                            <h2>{section.headline}</h2>
                        </div>    

                        <div className="mason-grid">
                            {section?.articles.map((article) => (

                                <article key={article.id} className="mason-article">                                
                                    <div className="mason-article__img-cntr">
                                        {article?.img.map((img) => (
                                            <Image key={img.id} src={img.src} alt={img.alt} width={100} height={100} />
                                        ))}                              
                                    </div>    
                                    <div className="mason-article__txt-cntr">
                                        <div className='mason-article__txt-cntr__cont'>
                                            <p className="mason-article__txt-cntr__cont__tag">{article.tag}</p>
                                            <p className="mason-article__txt-cntr__cont__headline">{article.headline}</p>
                                            <div className='mason-article__txt-cntr__cont__link'>
                                                {article?.link.map((link) => (
                                                    <a key={link.id} href={link.url}>{link.text}</a>
                                                ))} 
                                            </div>
                                            
                                        </div>                                       
                                        <div className="mason-article__txt-cntr__vertical-right">
                                            <div className="mason-article__txt-cntr__vertical-right__inner-cntr">
                                                <p>{article.dayMonth}</p><span></span><p>{article.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article> 
                            ))}   
                        </div>
                        {section?.link.map((link) => (
                            <div className="textSection__cntr__seeMore" key={link.id}>
                                <a href={link.url}>{link.text}</a>
                            </div>
                        ))}
                        

                    </div>  
                </>          
                ))} 
            </section>        
        ))}  
        </>
    )
}