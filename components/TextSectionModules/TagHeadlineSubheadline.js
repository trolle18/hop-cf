
export default function TagHeadlineSubheadline({section}) {

    return (
        <>

        <div className="textSection__tag">
            {/* <hr/> */}
            <p>{section.tag}</p>
        </div>
        
        <div className="textSection__cntr" key={section.id}> 
            <div className="textSection__cntr__inner-cntr grid-cntr  grid-1-2">
                <div className="headline-cntr grid-1-2__col-1">
                    <h2>{section.headline}</h2>
                </div>    
                            
                <div className="txt-cntr grid-1-2__col-2">
                    <div className="txt-cntr__inner-cntr">                            
                        <div className="subheader">
                            <p>
                                <span>
                                    <svg width="48" height="9" viewBox="0 0 48 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4.5" cy="4.5" r="3.7" fill="#183428" stroke="#183428" stroke-width="1.6"/>
                                        <line x1="3" y1="4.25" x2="48" y2="4.25" stroke="#183428" stroke-width="1.5"/>
                                    </svg>
                                </span>
                                {section.subheadline}
                            </p>                                
                        </div>
                    </div>                                                               
                </div>     
            </div>                   

        </div>       

        </>
    )
}
