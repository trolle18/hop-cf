import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselVideos from './SwiperCarouselVideos';

export default function PurposeSection({ data }) {

    return (
        <>
            <section className="textSection theme-midnight-green">
                <TagHeadlineSubheadline data={data}/>      
            {/* </section>   
            <section className="textSection theme-midnight-green"> */}
                {/* {data.textSec.map((data) => (
                    <div key={data.id}>
                        <h3>{data.headline}</h3>
                        <p>{data.text}</p>
                    </div>
                ))} */}

                <div className="textSection__cntr" key={data.id}> 

                    <div className="textSection__cntr__inner-cntr grid-cntr  grid-1-2">
                        {data.textSec.map((data) => (
                            <div key={data.id}>
                                <h3>{data.headline}</h3>
                                <p>{data.text}</p>
                            </div>
                        ))}
                    
      
                           
                    </div> 

                    <div className="seeMore-cntr">
                        <div className="seeMore-cntr__inner-cntr">
                            <div className="arrow-top-right-cntr"><span className="arrow-top-right"></span></div>
                            {data.link.map((data) => (
                                <p key={data.id}>
                                    {data.text}
                                </p>
                            ))}
                        </div>
                    </div>          
                </div>       

                
            </section>
        </>
    )
}