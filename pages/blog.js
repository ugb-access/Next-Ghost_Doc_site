import { getSinglePage } from "../services/GhostService";

function Blog({ title, html }) {
    return (
        <div className="text-xl">
            <div className=" max-w-2xl p-12 ">
                <h1 className=" page-title ">{title}</h1>

                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div></div>
        </div>
    );
}

export async function getStaticProps() {
    const { html, title } = await getSinglePage({slug: "blog"});
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

export default Blog;