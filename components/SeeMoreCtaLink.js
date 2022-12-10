
export default function SeeMoreCtaLink({ data }) {

    return (
        <>
        <div className="seeMore-cntr__inner-cntr">
            <div className="arrow-cntr"><span className="arrow-top-right"></span></div>
            {data.link.map((data) => (
                <p key={data.id}>
                    {data.text}
                </p>
            ))}
        </div>
        </>
    )
}