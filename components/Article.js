import Image from "next/image";

export default function Article ( {data} ) {

    return (
        <>
            <article className="article" key={data.id}>
                <div className="article__img-cntr">
                {data.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} height={600} width={600} />
                ))}
                </div>
                <div className="article-cnt">
                    <div className="article-cnt__txt">
                        <span className="article-cnt__txt__details">{data.subheadline}</span>
                        <p className="article-cnt__txt__headline">{data.headline}</p>
                        {/* <p className="article-cnt__txt__headline">{data.subheadline}</p> */}
                        <p className="article-cnt__txt__text">{data.text}</p>
                    </div>
                    
                </div>
            </article>
        </>
    )
}