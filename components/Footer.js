import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Footer() {
    // const [sectionData, setSectionData] = useState([]);

    // // Fetch data from JSON
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/components/footerData.json");
    //         const data = await response.json();
    //         setSectionData(data);             
    //     }       
    //     getData();        
    // }, []);

    const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/footer')
        .then((res) => res.json())
        .then((sectionData) => {
          setSectionData(sectionData)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p></p>
    if (!sectionData) return <p>No data</p>


    return (
        <>        
        <footer>
            {sectionData.data.map((data) => (
                <div key={data.id} className="footer-cntr">
                    <div className="footer-top">
                        <div className="footer-top__col-1">
                            {data?.logoLink.map((logoLink) => (
                                <a key={logoLink.id} href={logoLink.url} className="footer-top__col-1__logo">
                                <Image alt={logoLink.alt} src={logoLink.src} height={100} width={100}/>
                                    <div className="logo-svg"></div>
                                </a>
                            ))}
                            <div className="footer-top__col-1__btm">
                            {data?.contactInfo.map((link) => (
                                <div key={link.id}>
                                    <p>{link.text}</p>
                                    <p>{link?.subtext}</p>
                                </div>
                            ))}
                            </div>
                        </div>

                        <div className="footer-top__col-2">                
                            {data?.navLinks.map((navLink) => (
                                <div key={navLink.id} className="footer-top__col-2__box">
                                    <p className="footer-top__col-2__box__headline">{navLink.headline}</p>
                                    
                                    <div className="footer-top__col-2__box__links">
                                        {navLink?.links.map((link) => (
                                            <p key={link.id}>{link.text}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="footer-btm">
                        <div className="footer-btm__col-1">
                            {data?.btmLinks.map((link) => (
                                <p key={link.id}>{link.text}</p>
                            ))}
                        </div>
                        <div className="footer-btm__col-2">
                        {data?.someLinks.map((link) => (
                                <div key={link.id} className="footer-btm__col-2__some-links">
                                    <p>{link.altText}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            ))}
        </footer>
        </>
    )
}