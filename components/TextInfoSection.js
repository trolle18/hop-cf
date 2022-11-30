import React, { useState, useEffect } from 'react';

export default function TextInfoSection() {
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
                    {data?.txtInfoSection.map((section) => (
                        <>
                        <div className="textSection__tag">
                            <hr/>
                            <p>{section.tag}</p>
                        </div>
                        
                        <div className="textSection__cntr" key={section.id}> 
                            <div className="headline-cntr headline-60w">
                                <h2>{section.headline}</h2>
                            </div>    
                                        
                            <div className="txt-cntr">
                                <div className="txt-cntr__inner-cntr">  
                                    {section.articles.map((article) => (
                                        <p key={article.id}>
                                            <span>
                                                <svg width="48" height="9" viewBox="0 0 48 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="4.5" cy="4.5" r="3.7" fill="#183428" stroke="#183428" stroke-width="1.6"/>
                                                    <line x1="3" y1="4.25" x2="48" y2="4.25" stroke="#183428" stroke-width="1.5"/>
                                                </svg>
                                            </span>
                                            {article.tag}
                                        </p>
                                    ))}                          
                                    
                                </div>                                                               
                            </div>                        

                        </div>       
                        </>     
                    ))} 
                </section>        
            ))}
        </>
    )
}