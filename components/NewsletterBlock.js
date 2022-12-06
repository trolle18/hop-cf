import React, { useState, useEffect } from 'react';
import CtaBtn from './CtaBtn';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function NewsletterBlock() {
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
                {data?.newsletterBlock.map((section) => (
                    <TagHeadlineSubheadline key={section.id} section={section}/>      
                ))}  
            </section>   
        ))}
        {sectionData.map((data) => (
            <section className="newsletterBlock" key={data.id}>
                {data?.newsletterBlock.map((section) => (
                    <div key={section.id} className="newsletterBlock__cntr">
                        <div className="newsletterBlock__cntr__inner-cntr"> 

                            {section?.inputfields
                            .filter((input) => input.type.includes('name'))
                            .map((input) => (
                                <div className="inputfield" key={input.id}>
                                    <input placeholder={input.text} />
                                </div>
                            ))}

                            {section?.inputfields
                            .filter((input) => input.type.includes('email'))
                            .map((input) => (
                                <div className="inputfield" key={input.id}>
                                    <input placeholder={input.text} />
                                </div>
                            ))}

                                <div className="cta-btn-cntr ylw-cta arrow-top-r">
                                    {section?.link.map((link) => (
                                        <CtaBtn key={link.id} link={link}/>                          
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