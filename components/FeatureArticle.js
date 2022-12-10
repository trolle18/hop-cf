// import Image from "next/image";

export default function FeatureArticle ( {data} ) {

    // function getMedia(data) {
    //     if (data.video.alt === "video") {
    //         return (
    //             <div className="article-img__video-cntr">
    //                 {data.video?.map((video) => (
    //                     <video
    //                     key={video.id}
    //                     // autoPlay
    //                     muted
    //                     controls={true}
    //                     // loop
    //                     >
    //                         <source src={video.src}/>
    //                     </video>
    //                 ))}                        
    //             </div>
                
    //         )
    //     }
    //       if (data.video.alt != "video") {
    //         return (
    //             <div className="article-img__img-cntr">
    //                 {data.img.map((img) => (
    //                     <Image key={img.id} src={img.src} alt={img.alt} height={1000} width={1000} />
    //                 ))}
    //             </div>
    //         )
    //     }
    // }
    


    return (
        <>
            <article className="feature-article" key={data.id}>
                <div className="feature-img">
                    {/* {getMedia(data)} */}
                    <div className="feature-img__video-cntr">
                    {data.video?.map((video) => (
                        <video
                        key={video.id}
                        // muted
                        // controls={false}
                        >
                            <source src={video.src}/>
                        </video>
                    ))}                        
                </div>
                    
                </div>
                <div className="feature-cnt">
                    <div className="feature-cnt__txt">
                        <span className="feature-cnt__txt__tag">{data.tag}</span>
                        <h3 className="feature-cnt__txt__headline">{data.headline}</h3>
                        <span className="feature-cnt__txt__quote"></span>
                        <p className="feature-cnt__txt__text">{data.text}</p>
                    </div>
                </div>
            </article>
        </>
    )
}