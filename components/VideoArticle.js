import Image from "next/image";

export default function VideoArticle ( {data} ) {

    return (
        <>
            <article className="video-article" key={data.id}>
                <div className="article-img">
                    <div className="article-img__img-cntr">
                        {data.img.map((img) => (
                            <Image key={img.id} src={img.src} alt={img.alt} height={1000} width={1000} />
                        ))}
                    </div>
                    
                    {/* {data.link.map((link) => (
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
                <div className="article-cnt">
                    <div className="article-cnt__txt">
                    <span className="article-cnt__txt__tag article-cnt__txt__details">{data.tag}</span>
                        <span className="article-cnt__txt__time article-cnt__txt__details">{data.time}</span>
                        <h3 className="article-cnt__txt__headline">{data.headline}</h3>
                        <p className="article-cnt__txt__text">{data.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}