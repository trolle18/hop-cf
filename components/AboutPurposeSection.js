import CtaBtn from './CtaBtn';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import VideoArticle from './VideoArticle';

export default function AboutPurposeSection({ data }) {

    return (
        <>
            <section className="textSection textSection-underlined theme-d-grey">
                <TagHeadlineSubheadline data={data}/>      

                
                <section className="video-section">
                    <div className="video-section-main">
                        <div className="video-section-main__feature-cntr">
                            <div className="video-section-main__feature-cntr__feature">
                                {data.articles
                                .filter((data) => data.styleTag.includes('feature'))
                                .map((data) => (
                                    <VideoArticle key={data.id} data={data}/>
                                ))}
                            </div>  
                            <div className="video-section-main__feature-cntr__regular">
                                <div className="textSection__cntr__inner-cntr grid-cntr  grid-1-2">
                                    {data.textSec.map((data) => (
                                        <div key={data.id}>
                                            <h3>{data.headline}</h3>
                                            <p>{data.text}</p>
                                        </div>
                                    ))}      
                                </div> 
                          
                            </div>   

                        </div>
                    </div>

                    
                </section>           
                <div className="cta-btn-cntr ylw-cta arrow-top-r">
                    {data?.link.map((link) => (
                        <CtaBtn key={link.id} link={link}/>                          
                    ))}
                </div>

            </section>
        </>
    )
}