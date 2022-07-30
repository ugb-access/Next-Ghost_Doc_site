
const ScrollHighlight = ({ links, activeClass }) => {

    return (
        <aside className="scroll-highlight-container hidden xl:block ">
            <div className=" flex items-center ">
                <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="20"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                >
                    <path d="M15 18H3M21 6H3M17 12H3"></path>
                </svg>
                <p className=" !font-semibold !text-sm !my-4 !ml-2   ">
                    On this page
                </p>
            </div>
            {links.map((link, index) => (
                <a
                    data-to-scrollspy-id={link.id}
                    href={link.url}
                    key={index + link?.name}
                    className={`${activeClass == link?.name ? "active" : ""}`}
                >
                    {link?.name}
                </a>
            ))}

            <div className=" border-t border-[#eaeaea] mt-2 pt-2 ">
                <div className="py-2 text-[#666] text-sm hover:text-black cursor-pointer flex items-center">
                    <svg
                        data-testid="geist-icon"
                        fill="none"
                        height="20"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="20"
                        className="mr-2"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 12l-4-4-4 4"></path>
                        <path d="M12 16V8"></path>
                    </svg>
                    Back to top
                </div>
            </div>
        </aside>
    );
};

export default ScrollHighlight;
