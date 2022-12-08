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
                {data?.newsletterBlock.map((data) => (
                    <TagHeadlineSubheadline key={data.id} data={data}/>      
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
                                <div key={input.id} className="inputfield">
                                    <input placeholder={input.text} type="text" id="name" name="name"/>
                                </div>
                            ))}

                            {section?.inputfields
                            .filter((input) => input.type.includes('email'))
                            .map((input) => (
                                <div key={input.id} className="inputfield">
                                    <input placeholder={input.text} type="text" id="email" name="email"/>
                                </div>
                            ))}

                                <div className="cta-btn-cntr ylw-cta arrow-top-r">
                                    {section?.link.map((link) => (
                                        <button className="cta-btn" key={link.id} onClick={console.log("submit")}>
                                            <span className="cta-btn__arrow"></span>
                                            <p className="cta-btn__text">{link.text}</p>
                                            <span className="cta-btn__svg-cntr"><span className="arrow"></span></span>         
                                        </button>
                                        
                                    ))}
                                </div>{/* <CtaBtn key={link.id} link={link}/>*/}
                        </div>   
                    </div>         
                ))} 
            </section>        
        ))}  
        </>
    )
}