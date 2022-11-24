import { useEffect, useState } from "react"
import Article from "./Article";

export default function ArticleSection() {
    const [sectionData, setSectionData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/components/articlesData.json");
            const data = await response.json();
            setSectionData(data)
        }
        getData();
    }, []);

    return (
        <>
        <section className="section-grid">
            {sectionData.map((data) => (
                    <Article key={data.id} data={data} />
            ))}
        </section>

        </>
    )
}