import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/scss';
import Article from "./Article";

export default function SwiperSection() {
    const [sectionData, setSectionData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/articlesData.json");
            const data = await response.json();
            setSectionData(data)
        }
        getData();
    }, []);

    return (
    <section className="swiper-section">
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {sectionData.map((data) => (
                <SwiperSlide key={data.id}>
                    <Article data={data}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
    )
} 