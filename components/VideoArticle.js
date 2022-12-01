import Image from "next/image";

export default function VideoArticle ( {data} ) {

    return (
        <>
            <article className="video-article" key={data.id}>
                <div className="article__img-cntr">
                {data.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} height={100} width={100} />
                ))}
                </div>
                <div className="video-cnt">
                    <div className="article-cnt__txt">
                        <span className="article-cnt__txt__details">{data.time}</span>
                        <h3 className="article-cnt__txt__headline">{data.headline}</h3>
                        <p className="article-cnt__txt__headline">{data.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}