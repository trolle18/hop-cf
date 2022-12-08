import { useEffect, useState, useRef } from "react";
import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import PodcastArticle from "./PodcastArticle";

const SwiperCarouselPodcasts = () => {
    // const [sectionData, setSectionData] = useState([]);
    // // const swiperRef = useRef();

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/components/podcastData.json");
    //         const data = await response.json();
    //         setSectionData(data)
    //     }
    //     getData();
    // }, []);

    const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/podcasts')
        .then((res) => res.json())
        .then((sectionData) => {
          setSectionData(sectionData)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!sectionData) return <p>No data</p>

    return (
        <>
        <div className="swiper-cntr show-details">        
            <Swiper
            spaceBetween={ 20 }
            slidesPerView={ 3 }
            allowTouchMove={ true }
            touchStartPreventDefault={ false }
            navigation={ true }
            modules={ [Navigation] }
            breakpoints= {{
                 310: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                480: {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                },
                600: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                992: {
                    slidesPerView: 3,
                    centeredSlides: false,
                }
            }}
            >
                {sectionData.data.map((data) => (
                    <SwiperSlide key={data.id}>
                        <SwiperArticle data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="seeMore-cntr">
                <div className="seeMore-cntr__inner-cntr">
                    <div className="arrow-top-right-cntr"><span className="arrow-top-right"></span></div>
                    <p>Flere podcasts</p>
                </div>
            </div>
        </div>
        </>
    )
} 

export default SwiperCarouselPodcasts;
