import { useEffect, useState, useRef } from "react";
import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import useSWR from "swr"


const SwiperCarouselVideos = ({ data }) => {
    // const [sectionData, setSectionData] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/components/videoArticlesData.json");
    //         const data = await response.json();
    //         setSectionData(data)
    //     }
    //     getData();
    // }, []);

    // -----------------------------------------------

    // const [sectionData, setSectionData] = useState(null)
    // const [isLoading, setLoading] = useState(false)
  
    // useEffect(() => {
    //   setLoading(true)
    //   fetch('/api/videoArticles')
    //     .then((res) => res.json())
    //     .then((sectionData) => {
    //       setSectionData(sectionData)
    //       setLoading(false)
    //     })
    // }, [])
  
    // if (isLoading) return <p>Loading...</p>
    // if (!sectionData) return <p>No data</p>

    // -----------------------------------------------

    // const pagination = {
    //     clickable: true,
    //     el: '.swiper-controls__dots',
    //     renderBullet: (index, className) => {
    //         return '<span key="' + index + '" class="' + className + '">' + ("") + "</span>";
    //     }
    // }

    return (
        <>
        <div className="swiper-cntr">        
            {/* <div className="swiper-controls-cntr">
                <p className="swiper-controls-cntr__title">Relaterede videoer</p>
                <div className="swiper-controls">
                    <button className="swiper-controls__btn-cntr" onClick={() => swiperRef.current?.slidePrev()}>
                        <span className="swiper-controls__btn-cntr__btn prev-btn"></span>
                    </button>
                    <div className="swiper-controls__dots swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                    <button className="swiper-controls__btn-cntr" onClick={() => swiperRef.current?.slideNext()}>
                        <span className="swiper-controls__btn-cntr__btn next-btn"></span>
                    </button>
                </div>
            </div> */}
            <Swiper
            spaceBetween={ 20 }
            slidesPerView={ 3 }
            allowTouchMove={ true }
            touchStartPreventDefault={ false }
            navigation={ true }
            modules={ [Navigation] }
            // onBeforeInit={ (swiper) => {
            //     swiperRef.current = swiper;
            // }}
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
                {data.articles.map((data) => (
                    <SwiperSlide key={data.id}>
                        <SwiperArticle data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="seeMore-cntr">
                <div className="seeMore-cntr__inner-cntr">
                    <div className="arrow-top-right-cntr"><span className="arrow-top-right"></span></div>
                    <p>Flere videoer</p>
                </div>
            </div>
        </div>
        </>
    )
} 

export default SwiperCarouselVideos;
