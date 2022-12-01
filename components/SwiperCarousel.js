import { useEffect, useState, useRef } from "react";
import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const SwiperCarousel = () => {
    const [sectionData, setSectionData] = useState([]);
    const swiperRef = useRef();

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/articlesData.json");
            const data = await response.json();
            setSectionData(data)
        }
        getData();
    }, []);

    const pagination = {
        clickable: true,
        el: '.swiper-controls__dots',
        renderBullet: (index, className) => {
            return '<span key="' + index + '" class="' + className + '">' + ("") + "</span>";
        }
    }

    return (
        <>
        <div className="swiper-cntr">        
            <div className="swiper-controls">
                <button className="swiper-controls__btn prev-btn" onClick={() => swiperRef.current?.slidePrev()}></button>
                <div className="swiper-controls__dots swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                <button className="swiper-controls__btn next-btn" onClick={() => swiperRef.current?.slideNext()}></button>
            </div>
            <Swiper
            spaceBetween={ 20 }
            slidesPerView={ 3 }
            allowTouchMove={ true }
            touchStartPreventDefault={ false }
            pagination={ pagination }
            navigation={ true }
            modules={ [Pagination, Navigation] }
            onBeforeInit={ (swiper) => {
                swiperRef.current = swiper;
            }}
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
                {sectionData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <SwiperArticle data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    )
} 

export default SwiperCarousel;
