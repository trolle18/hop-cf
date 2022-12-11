
export default function SeeMoreCtaLink({ data }) {

    function checkLinkText(data) {
        const textExists = data.text;
        if (textExists) { 
            return (<p>{data.text}</p>) 
        }
        else { 
            return(null) 
        }
    }

    return (
        <>
        {data.link.map((data) => (
            <a className="seeMore-cntr__inner-cntr" key={data.id} href={data.url}>
                <div className="arrow-cntr">
                    <span className="arrow-top-right"></span>
                </div>
                {checkLinkText(data)}
            </a>
        ))}
        </>
    )
}