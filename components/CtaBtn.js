
export default function CtaBtn( {link} ) {

    return (
        <>
        <button className="cta-btn" key={link.id}>
            <span className="cta-btn__arrow"></span>
            <p className="cta-btn__text">{link.text}</p>
            <span className="cta-btn__svg-cntr"><span className="arrow"></span></span>         
        </button>
        </>
    )
}