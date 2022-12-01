import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CTAbtn';
import CtaLink from './CtaLink';

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
                            <h2>{section.headline2nd}</h2>
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
                                            {/* <div className='mason-article__txt-cntr__cont__link'> */}
                                                {/* {article?.link.map((data) => (
                                                    <a key={data.id} href={data.url}>{data.text}</a>
                                                ))}  */}
                                                {article?.link.map((data) => (
                                                    <div key={data.id} className="arrow-right">
                                                        <CtaLink key={data.id} data={data}/>
                                                    </div>
                                                ))} 
                                            {/* </div>                                             */}
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

                        {section?.link.map((data) => (
                            <div key={data.id} className="arrow-down">
                                <CtaLink key={data.id} data={data}/>
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
