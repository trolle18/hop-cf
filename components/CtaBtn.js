
export default function CtaBtn( {link} ) {

    return (
        <>
        <button className="cta-btn" key={link.id}>
            {link.text}
            <div className="cta-btn__svg-cntr">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.5" cy="4.5" r="3.7" fill="#183428" stroke="#183428" stroke-width="1.6"/>
                </svg>
            </div>
        </button>
        </>
    )
}