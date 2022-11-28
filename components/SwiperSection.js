/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import { useEffect, useState } from "react";
import Article from "./Article";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/scss';
import "swiper/scss/pagination";
// import "swiper/scss/navigation";


export default () => {
    const [sectionData, setSectionData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/articlesData.json");
            const data = await response.json();
            setSectionData(data)
        }
        getData();
    }, []);

    // const swiper = new Swiper(".swiper", {
    //     modules: [Pagination, Navigation],
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     }
    // })


    // const swiper = new Swiper(`[id='${document.querySelector(".article")}'].swiper`, {
    //     direction: "horizontal",
    //     slidesPerView: "3",
    //     allowTouchMove: true,
    //     navigation: {
    //         prevEl: `[id='${document.querySelector(".article")}'].left-overlay`,
    //         nextEl: `[id='${document.querySelector(".article")}'].right-overlay`
    //     },
    //     pagination: {
    //         el: `[id='${document.querySelector(".article")}'].swiper-pagination-articles`,
    //         type: "bullets",
    //         clickable: true
    //     },
    //     wrapperClass: "swiper-wrapper",
    //     effect: "slide",
    //     speed: 600,
    //     breakpoints: {
    //         310: {
    //             slidesPerView: 1.2,
    //             centeredSlides: true,
    //             centeredSlideBounds: true
    //         },
    //         480: {
    //             slidesPerView: 1.2,
    //             centeredSlides: true,
    //             centeredSlideBounds: true
    //         },
    //         600: {
    //             slidesPerView: 1.2,
    //             centeredSlides: true,
    //             centeredSlideBounds: true
    //         },
    //         992: {
    //             slidesPerView: 3,
    //         }
    //     }
    // });

    // function SlideNextBtn() {
    //     const useswiper = useSwiper();
    //     return (
    //         <button onClick={() => useswiper.slideNext()}>Next slide </button>
    //     )
    // }
    

    return (
        <>
        {/* <SlideNextBtn/> */}
            <Swiper
            // spaceBetween={20}
            slidesPerView={2.75}
            allowTouchMove={true}
            touchStartPreventDefault={false}
            touchEventsTarget={".container"}
            pagination={{ 
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}

            >
                {sectionData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <Article data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
} 