import Image from "next/image";

export default function SwiperArticle ( {data} ) {

    return (
        <>
            <article className="swiper-article" key={data.id}>
                <div className="swiper-article__img-cntr">
                {data.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} height={100} width={100} />
                ))}
                </div>
                <div className="swiper-article-cnt">
                    <div className="swiper-article-cnt__txt">
                        <span className="swiper-article-cnt__txt__details">{data.createdDate}</span>
                        <p className="swiper-article-cnt__txt__headline">{data.title}</p>
                    </div>
                </div>
            </article>
        </>
    )
}