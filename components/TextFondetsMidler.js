import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
// import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function TextFondetsMidler({ data }) {

    return (
        <>
        <section className="textSection">
            <TagHeadlineSubheadline data={data}/>   <br/><br/>

            <div className="textSection__cntr" key={data.id}> 
                <div className="textSection__cntr__inner-cntr grid-cntr grid-rows">
                         
                    {data.articles.map((data) => (
                        <div key={data.id} className="grid-rows__row-cntr">

                            <div className="grid-rows__row-cntr__inner-cntr">
                                <p className="">
                                    {data.headline}
                                </p>
                            </div>

                            <div className="grid-rows__row-cntr__inner-cntr">
                                <div className="grid-rows__row-cntr__inner-cntr__col">
                                    <h3 className="">
                                        {data.number}
                                    </h3>
                                    <p className="">
                                        {data.text}
                                    </p>
                                </div>
                                

                                <div className="grid-rows__row-cntr__inner-cntr__col">
                                    <span className="">
                                        {data.text}
                                    </span>
                                </div>
                                <div className="grid-rows__row-cntr__inner-cntr__link">
                                    <span className="">
                                        {data.text}
                                    </span>
                                </div>
    
                            </div>
                        </div>
                    ))} 


                </div>                   
            </div>       

        </section>
        </>
    )
}