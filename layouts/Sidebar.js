import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Sidebar = ({categories}) => {
    const router = useRouter();
   
    return (
        <div className=" text-xl sidebar-container hidden lg:block ">
            <div className="sidebar-inner-container">
                {categories.map((cat, index) => {

                    return (
                        <div className="item-container" key={index + cat.url}>
                            <Link href={cat.url}>
                                <a className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 mr-2 ${router?.asPath?.includes (
                                            cat?.url?.replace("/", "")
                                        ) ? "rotate-180" : "rotate-90"}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                    {cat.name}
                                </a>
                            </Link>

                            {router?.asPath?.includes (
                                cat?.url?.replace("/", "")
                            ) && cat?.children ? (
                                <div className="pt-2.5 mt-2.5 ml-2 pl-4 -mb-2.5 border-l border-black overflow-hidden ">
                                    {cat?.children?.map((child, index) => {
                                        return (
                                            <Link
                                                href={child?.url}
                                                key={index + child?.url}
                                            >
                                                <a
                                                    className={`${
                                                        index + 1 ==
                                                        cat.children.length
                                                            ? "!mb-2.5"
                                                            : " mb-4"
                                                    } `}
                                                >
                                                    {child.name}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
