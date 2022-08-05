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
    const page = await getSinglePage({ slug: "blog" });

    if (!page) {
        return {
            notFound: true,
        };
    }

    const { title, html } = page;
    return {
        props: {
            html,
            title,
        },
        // revalidate: 120,
    };
}

export default Blog;
