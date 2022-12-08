import React, { useState, useEffect } from 'react';
import Image from "next/image";
import CtaBtn from './CtaBtn';
import { onSnapshot, query } from 'firebase/firestore';
import { homepageRef } from '../firebaseConfig';

export default function Hero({data}) {
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

    // useEffect(() => {
    //     const q = query(homepageRef);
    //     const unsubscribe = onSnapshot(q, (data) => {
    //       const homepageData = data.docs.map((doc) => {
    //         return { ...doc.data(), id: doc.id };
    //       });
    //       setSectionData(homepageData);
    //     });
    //     return () => unsubscribe();
    //   }, []);

    return (
        <>
        <section className="hero-wrapper">
            {sectionData.map((data) => (            
                <div className="hero" key={data.id}>
                    {data?.hero.map((hero) => (
                    <div key={hero.id} className="hero-cntr">                    
                        <div className="hero-cntr__img-cntr"></div>

                        <div className="hero-cntr__txt-cntr">
                            <div className="hero-cntr__txt-cntr__headline">
                                <h1>{hero.headline}</h1>
                            </div>
                            <div className="hero-cntr__txt-cntr__btm">
                                <div className="hero-cntr__txt-cntr__btm__text">
                                    <p>{hero.text}</p>
                                </div>

                                <div className="hero-cntr__txt-cntr__btm__cta" href={hero.ctaUrl}>
                                
                                    <div className="cta-inner-cntr">
                                        <div className="cta-btn-cntr plain-light-cta arrow-top-r">
                                            {hero?.link.map((link) => (
                                                <CtaBtn key={link.id} link={link}/>                          
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>

                    </div>            
                    ))} 
                </div>            
            ))}
        </section>
        </>
    )
}