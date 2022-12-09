import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselPodcasts from './SwiperCarouselPodcasts';
import SeeMoreCtaLink from './SeeMoreCtaLink';

export default function PodcastSection({ data }) {

    return (
        <>
        <section className="textSection theme-l-grey" key={data.id}>
                <TagHeadlineSubheadline key={data.id} data={data}/>      
        {/* </section>    */}
        
        {/* <section className="video-section theme-l-grey"> */}
            <SwiperCarouselPodcasts key={data.id} data={data}/>                        
        {/* </section>

        <section className="textSection theme-l-grey"> */}
            <div className="textSection__cntr"> 
                <div className="seeMore-cntr">
                    <SeeMoreCtaLink data={data}/>
                </div> 
            </div>
        </section>
        </>
    )
} 