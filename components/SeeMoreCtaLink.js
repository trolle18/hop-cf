
export default function SeeMoreCtaLink({ data }) {

    return (
        <>
        <div className="seeMore-cntr__inner-cntr">
            <div className="arrow-top-right-cntr"><span className="arrow-top-right"></span></div>
            {data.link.map((data) => (
                <p key={data.id}>
                    {data.text}
                </p>
            ))}
        </div>
        </>
    )
}