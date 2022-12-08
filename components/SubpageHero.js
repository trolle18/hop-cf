import Image from 'next/image';
import CtaBtn from './CtaBtn';

export default function SubpageHero({ data }) {

    return (
        <>
        <section className="hero-wrapper" key={data.id} >
            <div className="hero" key={data.id}>
                
                <div className="hero-cntr color-hero theme-lightest-green">                    
                    <div className="hero-cntr__img-cntr color-hero theme-lightest-green">
                    </div>

                    <div className="hero-cntr__txt-cntr">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>
                        {/* <div className="hero-cntr__txt-cntr__btm">
                            <div className="hero-cntr__txt-cntr__btm__text">
                                <p>{data.text}</p>
                            </div>

                            <div className="hero-cntr__txt-cntr__btm__cta" href={data.ctaUrl}>
                            
                                <div className="cta-inner-cntr">
                                    <div className="cta-btn-cntr plain-light-cta arrow-top-r">
                                        {data?.link.map((link) => (
                                            <CtaBtn key={link.id} link={link}/>                          
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>                         */}
                    </div>

                </div>            
                
            </div>
        </section>
        </>
    )
}