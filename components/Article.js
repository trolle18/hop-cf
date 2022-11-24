import Image from "next/image";

export default function Article ( {data} ) {

    return (
        <>
            <article className="article" key={data.id}>
                <div className="article__img-cntr">
                {data.img.map((img) => (
                    <Image key={img.id} src={img.src} alt={img.alt} height={100} width={100} />
                ))}
                </div>
                <div className="article-cntn">
                    <div className="article-cntn__txt">
                        <div className="txt-top">
                            <span>{data.category}</span>
                            <span>{data.createdDate}</span>
                        </div>

                        <h3 className="article-headline">{data.title}</h3>
                        <span>{data.tag}</span>
                        <p>{data.desc}</p>
                    </div>

                    <div className="article-cntn__btm">
                        {data.link.map((link) => (
                            <a className="btm-link" key={link.id}>
                                {link.txt}
                            </a>
                        ))}
                    </div>
                </div>
                
               

            </article>
        </>
    )
}