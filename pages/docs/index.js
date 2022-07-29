import { useEffect, useState } from "react";
import ScrollHighlight from "../../components/ScrollHighlight";
import { getSinglePage } from "../../services/GhostService";
function Docs({ title, html }) {
    const [activeClass, setActiveClass] = useState("");
    useEffect(() => {
        

        window.addEventListener("scroll",scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const scrollHandler = (e) => {
        const ref1 = document.getElementById("quickstart");
        const ref1Top = ref1?.getBoundingClientRect();
        const ref2 = document.getElementById("toturial");

        const ref2Top = ref2?.getBoundingClientRect();
        if (ref1) {
            if (
                window.scrollY >= ref1Top.top &&
                window.scrollY < ref1Top.top + ref1Top.height
            ) {
                setActiveClass("quickstart");
            }
            if (
                window.scrollY >= ref2Top?.top &&
                window.scrollY < ref2Top?.top + ref2Top?.height
            ) {
                setActiveClass("toturial");
            }
        }
    };
    return (
        <div className="flex items-start">
            <div className=" max-w-2xl p-12 ">
                <div className="mt-7">
                    <h1 className="page-title">
                        <a href="#">{title}</a>
                    </h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <ScrollHighlight
                links={[
                    { url: "#quickstart", name: "quickstart" },
                    { url: "#toturial", name: "toturial" },
                    { url: "#products-features", name: "products features" },
                ]}
                activeClass={activeClass}
            />
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
        revalidate: 120,
    };
}

export default Docs;
