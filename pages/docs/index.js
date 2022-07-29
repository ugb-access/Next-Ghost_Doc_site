import ScrollHighlight from "../../components/ScrollHighlight";
import { getSinglePage } from "../../services/GhostService";
import { pageTitle } from "../../styles/home.module.css";
function Docs({ title, html }) {
    return (
        <div className="flex items-start">
            <div className=" max-w-2xl p-12 ">
                <div className="mt-7">
                    <h1 className="page-title">{title}</h1>
                </div>

                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <ScrollHighlight />
        </div>
    );
}

export async function getStaticProps() {
    const { html, title } = await getSinglePage({ slug: "docs" });
    if (!title) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            html,
            title,
        },
        revalidate: 120
    };
}

export default Docs;
