import SwiperCarousel from './SwiperCarousel';
import TagHeadlineSubheadline from './TextSectionModules/TagHeadlineSubheadline';

export default function TextCarouselSection({ data }) {

    return (
        <>
                <section className="textSection theme-l-orange" key={data.id}>
                    <TagHeadlineSubheadline data={data}/>
                    <SwiperCarousel/>
                </section>        
        </>
    )
}