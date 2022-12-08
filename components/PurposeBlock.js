import VideoArticle from './VideoArticle';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselVideos from './SwiperCarouselVideos';

export default function PurposeBlock({ data }) {

    return (
        <>
            <section className="textSection textSection-underlined theme-l-grey">
                <TagHeadlineSubheadline data={data}/>      
            </section>   
            {/* <section className='section-wrapper'> */}
            <section className="video-section theme-l-grey">
                <div>
                    
                </div>
            </section>
            {/* </section> */}
        </>
    )
}