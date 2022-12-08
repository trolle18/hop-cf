import { useEffect, useState, useRef } from "react";
import SwiperArticle from "./SwiperArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSWR from "swr"



// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const SwiperCarousel = () => {
    // const [sectionData, setSectionData] = useState([]);
    
    // const { sectionData, error } = useSWR('/api/articles', fetcher)
    // if (error) {
    //     console.log(error)
    //     return ( <div>Failed to load</div> )
    // }
    // if (!sectionData) return( <div>Loading...</div>)

    // -----------------------------------------------

    const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/articles')
        .then((res) => res.json())
        .then((sectionData) => {
          setSectionData(sectionData)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!sectionData) return <p>No data</p>


    // -----------------------------------------------

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/components/articlesData.json");
    //         const data = await response.json();
    //         setSectionData(data)
    //     }
    //     getData();
    // }, []);

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
                {sectionData?.data.map((data) => (
                    <SwiperSlide key={data.id} data={data}>
                        <SwiperArticle data={data}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="seeMore-cntr">
                <div className="seeMore-cntr__inner-cntr">
                    <div className="arrow-top-right-cntr"><span className="arrow-top-right"></span></div>
                    <p>Flere nyheder</p>
                </div>
            </div>
        </div>
        </>
    )
} 

export default SwiperCarousel;
