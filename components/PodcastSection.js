import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';
import SwiperCarouselPodcasts from './SwiperCarouselPodcasts';

export default function PodcastSection({ data }) {

    return (
        <>
        <section className="textSection" key={data.id}>
                <TagHeadlineSubheadline key={data.id} data={data}/>      
        </section>   
        
        <section className="video-section">
            <SwiperCarouselPodcasts key={data.id} data={data}/>                                  
        </section>
        </>
    )
}