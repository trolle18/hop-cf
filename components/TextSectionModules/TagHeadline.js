

export default function TagHeadline({section}) {

    return (
        <>                
        <div className="textSection__tag">
            <p>{section.tag}</p>
        </div>

        <div className="textSection__cntr" key={section.id}>
            <div className="textSection__cntr__inner-cntr grid-cntr grid-1-2">                
                <div className="grid-1-2__col-1  headline-cntr">
                    <h2>{section.headline}</h2>
                </div>    
            </div>                   
        </div>                
        </>
    )
}
