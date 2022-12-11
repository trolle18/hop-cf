import Image from 'next/image';
import CtaBtn from './CtaBtn';

export default function SubpageHero({ data }) {

    return (
        <>
        <section className="hero-wrapper subpagehero-wrapper " key={data.id} >
            <div className="hero" key={data.id}>
                
                <div className="hero-cntr color-hero theme-lightest-green">                    
                    <div className="hero-cntr__img-cntr color-hero theme-lightest-green">
                    </div>

                    <div className="hero-cntr__txt-cntr subpage-hero-text">
                        <div className="hero-cntr__txt-cntr__headline">
                            <h1>{data.headline}</h1>
                        </div>
                    </div>

                </div>            
                
            </div>
        </section>
        </>
    )
}