import Image from "next/image";

export default function SwiperArticle ( {data} ) {
    // const { data, error } = useSWR(`/api/articles/${id}`, fetcher)
    // return {
    //     data: data,
    //     isLoading: !error && !data,
    //     isError: error
    //   }

    return (
        <>
            <article className="swiper-article theme-plain" key={data.id}>
                <div className="swiper-article__img-cntr">
                    {data.img.map((img) => (
                        <Image key={img.id} src={img.src} alt={img.alt} height={100} width={100} />
                    ))}

                    
                        {/* {data.link
                        .filter((link) => link.type.includes('play'))
                        .map((link) => (
                            <>
                            <button className="play-btn">
                            <a className="article-img__play-btn__link" key={link.id}>
                                <span className="play-btn__text">{link.text}</span>
                                <span className="play-btn__icon"></span>
                            </a>
                             </button>
                            </>
                        ))} */}

                   
                </div>
                <div className="swiper-article-cont">
                    <div className="swiper-article-cont__txt">
                        <div className="swiper-article-cont__txt__details">
                            <span className="show-details">{data?.tag}</span>
                            <span className="show-details">{data?.episodes}</span>
                            <span>{data?.createdDate}</span>
                        </div>
                       
                        <p className="swiper-article-cont__txt__headline">{data.headline}</p>
                    </div>
                </div>
            </article>
        </>
    )
}