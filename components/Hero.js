import React, { useState, useEffect } from 'react';
import CtaBtn from './CtaBtn';

export default function Hero({ data }) {
    // const [sectionData, setSectionData] = useState(null)
    // const [isLoading, setLoading] = useState(false)
  
    // useEffect(() => {
    //   setLoading(true)
    //   fetch('/api/homepage')
    //     .then((res) => res.json())
    //     .then((sectionData) => {
    //       setSectionData(sectionData)
    //       setLoading(false)
    //     })
    // }, [])
  
    // if (isLoading) return <p>Loading...</p>
    // if (!sectionData) return <p>No data</p>

    return (
        <>
        <section className="hero-wrapper" key={data.id} >
            {/* {sectionData.homepageData.map((data) => (   */}
                {/* <>
                {data?.hero.map((data) => (           */}
                <div className="hero" key={data.id}>
                    
                    <div className="hero-cntr">                    
                        <div className="hero-cntr__img-cntr"></div>

                        <div className="hero-cntr__txt-cntr">
                            <div className="hero-cntr__txt-cntr__headline">
                                <h1>{data.headline}</h1>
                            </div>
                            <div className="hero-cntr__txt-cntr__btm">
                                <div className="hero-cntr__txt-cntr__btm__text">
                                    <p>{data.text}</p>
                                </div>

                                <div className="hero-cntr__txt-cntr__btm__cta" href={data.ctaUrl}>
                                
                                    <div className="cta-inner-cntr">
                                        <div className="cta-btn-cntr plain-light-cta arrow-top-r">
                                            {data?.link.map((link) => (
                                                <CtaBtn key={link.id} link={link}/>                          
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>

                    </div>            
                 
                </div>
                {/* ))}    
                </>          */}
            {/* ))} */}
        </section>
        </>
    )
}