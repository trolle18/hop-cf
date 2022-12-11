import { useEffect, useState } from "react"
import Article from "./Article";

export default function SortArticleSection({ data }) {

    return (
        <>
        <section className="textSection">
            <div className="textSection__cntr">

                <section className="article-section">
                    {data.articles
                    .sort ((a, b) => a.deadline > b.deadline ? 1 : -1)
                    .map((data) => (
                        <Article key={data.id} data={data} />
                    ))}
                </section>
                
            </div>
        </section>

        </>
    )
}