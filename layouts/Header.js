import Image from "next/image";
import Link from "next/link";

const Header = ({ isOpen, handleHamburgerClick }) => {
    return (
        <header className="header-container main-wrapper fixed top-0 z-50 w-full bg-white ">
            <div className=" flex items-center h-full max-w-screen-2xl ">
                <div className="flex-100 flex lg:mr-0 mr-2 ">
                    <Link href={"/"}>
                        <a className="logo-container min-w-[100px] ">
                            <Image
                                src={"/logo.png"}
                                alt="site logo"
                                width={100}
                                height={50}
                            />
                        </a>
                    </Link>

                    <nav className="nav-container items-center ml-4 hidden lg:flex">
                        <div className="flex-100 flex navigation-items ">
                            <span className="navigation-item">
                                <Link href={"/docs"}>
                                    <a className="block capitalize ">
                                        documentation
                                    </a>
                                </Link>
                            </span>
                            <span className="navigation-item">
                                <Link href={"/docs/get-started"}>
                                    <a className="block capitalize ">
                                        Toturials
                                    </a>
                                </Link>
                            </span>
                            <span className="navigation-item">
                                <Link href={"/guides"}>
                                    <a className="block capitalize ">guides</a>
                                </Link>
                            </span>
                            <div className="developer-dropdown hidden lg:block">
                                <span className="reference-container !flex items-center">
                                    Reference
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className=" w-3 ml-2 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className="search-container w-full justify-center">
                        <div className="search-bar">
                            <div className=" relative flex items-center justify-center"></div>
                            <div className=" search-input-container  ">
                                <input
                                    className="search-input-field px-3 h-8 max-w-[60vw] w-64 rounded-[5px] bg-white border-[#eaeaea] border outline-0 text-left focus:border-black  "
                                    autoComplete="off"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-100 flex justify-end lg:block ">
                    <nav className="nav-container items-center ml-4 user-container hidden lg:flex">
                        <div className="flex-100 flex navigation-items justify-end items-center">
                            <span className="navigation-item input-button-container mx-2.5 rounded-[5px] w-[90px] h-8 !flex items-center justify-center">
                                Feedback
                            </span>
                            <span className="navigation-item">
                                <Link href={"/support"}>
                                    <a className="block capitalize ">support</a>
                                </Link>
                            </span>
                            <span className="navigation-item">
                                <Link href={"/blog"}>
                                    <a className="block capitalize ">blog</a>
                                </Link>
                            </span>
                            <div className="user-info-container h-full ml-2.5 ">
                                <div className=" w-8 h-8 rounded-full overflow-hidden ">
                                    <div className="max-w-full cursor-pointer  max-h-full">
                                        <Image
                                            src={"/user-dummy-img.svg"}
                                            alt="User Icon"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div
                        className="lg:hidden block header-burger-icon-container"
                        onClick={handleHamburgerClick}
                    >
                        <div
                            className={`header-burger-icon ${
                                isOpen ? "open" : ""
                            }`}
                        >
                            <div className="line-top"></div>
                            <div className="line-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
