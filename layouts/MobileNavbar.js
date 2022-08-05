import Link from "next/link";
import { useRouter } from "next/router";

const MobileNavbar = () => {
    const {asPath} = useRouter();

    return (
        <div className="navbar-inner-header-container px-6 lg:hidden">
            <div>
                <div className=" pb-6 text-xs border-b border-[#eaeaea] text-[#666] uppercase ">
                    General{" "}
                </div>

                <div>
                    <div>
                        <div className={`border-b border-[#eaeaea] h-12 flex items-center text-[#5a5a5a] ${asPath.includes("/docs/get-started") ? "!text-black font-medium" : ""}`}>
                            <Link href={"/docs/get-started"}>
                                <a className="">Tutorial</a>
                            </Link>
                        </div>
                        <div className={`border-b border-[#eaeaea] h-12 flex items-center text-[#5a5a5a] ${asPath.includes("/guides") ? "!text-black font-medium" : ""}`}>
                            <Link href={"/guides"}>
                                <a className="">Guides</a>
                            </Link>
                        </div>
                        <div className={`border-b border-[#eaeaea] h-12 flex items-center text-[#5a5a5a] ${asPath.includes("/docs") && !asPath.includes("/docs/get-started") ? "!text-black font-medium" : ""}`}>
                            <Link href={"/docs"}>
                                <a className="">Documentation</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-6 pb-6 text-xs border-b border-[#eaeaea] text-[#666] uppercase ">
                    More{" "}
                </div>

                <div>
                    <div>
                        <div className={`border-b border-[#eaeaea] h-12 flex items-center text-[#5a5a5a] ${asPath.includes("/feedback") ? "!text-black font-medium" : ""}`}>
                            <Link href={"/feedback"}>
                                <a className="">Feedback</a>
                            </Link>
                        </div>
                        <div className={`border-b border-[#eaeaea] h-12 flex items-center text-[#5a5a5a] ${asPath.includes("/support") ? "!text-black font-medium" : ""}`}>
                            <Link href={"/support"}>
                                <a className="">Support</a>
                            </Link>
                        </div>
                        <div className={`border-b border-[#eaeaea] h-12 flex items-center text-[#5a5a5a] ${asPath.includes("/blog") ? "!text-black font-medium" : ""}`}>
                            <Link href={"/blog"}>
                                <a className="">Blog</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
