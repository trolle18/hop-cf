// import React, { useState, useEffect } from 'react';
// import CtaLink from './CtaLink';
// import MasonArticle from './MasonArticle';

export default function TagHeadline({section}) {
    // const [sectionData, setSectionData] = useState([]);

    // // Fetch data from JSON
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/homePageData.json");
    //         const data = await response.json();
    //         setSectionData(data);             
    //     }       
    //     getData();        
    // }, []);

    return (
        <>                
        <div className="textSection__tag">
            {/* <hr/> */}
            <p>{section.tag}</p>
        </div>

        <div className="textSection__cntr" key={section.id}>
            <div className="textSection__cntr__inner-cntr grid-cntr grid-1-2">                
                <div className="grid-1-2__col-1  headline-cntr">
                    <h2>{section.headline}</h2>
                    {/* <h2>{section.headline2nd}</h2> */}
                </div>    
            </div>                   
        </div>                
        </>
    )
}
