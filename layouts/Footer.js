import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" w-full text-sm border-[#eaeaea] border-t p-6 pt-7 ">
            <nav className=" mx-auto max-w-7xl lg:flex flex-nowrap justify-between block ">
                <div className=" pt-3 flex justify-center lg:block ">
                    <Link href={"/"}>
                        <a>
                            <Image
                                src={"/logo.png"}
                                alt="Site Logo"
                                width={100}
                                height={50}
                            />
                        </a>
                    </Link>
                </div>
                <div className="pt-3 mr-6  ">
                    <div className="lg:hidden max-w-md mx-auto">
                        <details
                            className="open:bg-white px-6 mb-2 rounded-lg "
                            
                        >
                            <summary className=" text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none flex items-center justify-between ">
                                Frameworks
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </summary>
                            <div >
                                <div className="footer-links-inner-container text-center">
                                    <li className=" list-none py-2 ">
                                        <Link href={"/next"}>
                                            <a>Next.js</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/react"}>
                                            <a>Create React App</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/svelte"}>
                                            <a>Svelte</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/nuxt"}>
                                            <a>Nuxt</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/gatsby"}>
                                            <a>Gatsby</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/vue"}>
                                            <a>Vue</a>
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div className="hidden lg:block">
                        <div className="footer-links-header my-3">
                            Frameworks
                        </div>
                        <div className="footer-links-inner-container">
                            <li className=" list-none py-2 ">
                                <Link href={"/next"}>
                                    <a>Next.js</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/react"}>
                                    <a>Create React App</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/svelte"}>
                                    <a>Svelte</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/nuxt"}>
                                    <a>Nuxt</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/gatsby"}>
                                    <a>Gatsby</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/vue"}>
                                    <a>Vue</a>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="pt-3 mr-6  ">
                    <div className="lg:hidden max-w-md mx-auto">
                        <details
                            className="open:bg-white px-6 mb-2 rounded-lg"
                            
                        >
                            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none flex items-center justify-between">
                                Resources
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </summary>
                            <div className=" transition ">
                                <div className="footer-links-inner-container text-center">
                                    <li className=" list-none py-2 ">
                                        <Link href={"/next"}>
                                            <a>Documentation</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/react"}>
                                            <a>Experts</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/svelte"}>
                                            <a>Guides</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/nuxt"}>
                                            <a>Support</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/gatsby"}>
                                            <a>API Reference</a>
                                        </Link>
                                    </li>
                                    <li className=" list-none py-2 ">
                                        <Link href={"/vue"}>
                                            <a>OSS</a>
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div className="hidden lg:block">
                        <div className="footer-links-header my-3">
                            Resources
                        </div>
                        <div className="footer-links-inner-container">
                            <li className=" list-none py-2 ">
                                <Link href={"/next"}>
                                    <a>Documentation</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/react"}>
                                    <a>Experts</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/svelte"}>
                                    <a>Guides</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/nuxt"}>
                                    <a>Support</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/gatsby"}>
                                    <a>API Reference</a>
                                </Link>
                            </li>
                            <li className=" list-none py-2 ">
                                <Link href={"/vue"}>
                                    <a>OSS</a>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="pt-3 mr-6 hidden lg:block">
                    <div className="footer-links-header my-3">Company</div>
                    <div className="footer-links-inner-container">
                        <li className=" list-none py-2 ">
                            <Link href={"/"}>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/blog"}>
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/svelte"}>
                                <a>Changelog</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/about"}>
                                <a>About</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/gatsby"}>
                                <a>Careers</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Pricing</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Enterprise</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Security</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Next.js Conf</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Partners</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </div>
                </div>

                <div className="pt-3 hidden lg:block ">
                    <div className="footer-links-header my-3"> Legal</div>
                    <div className="footer-links-inner-container">
                        <li className=" list-none py-2 ">
                            <Link href={"/next"}>
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/react"}>
                                <a>Terms of Service</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/svelte"}>
                                <a>Trademark Policy</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/nuxt"}>
                                <a>Inactivity Policy</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/gatsby"}>
                                <a>DMCA Policy</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>DPA</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>SLA</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Sub-processors</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Cookie Preferences</a>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
            <section className="mx-auto max-w-7xl mt-6 w-full">
                <div className=" flex items-center justify-center py-6 max-w-full ">
                    <span className=" text-[#666] ">
                        <span>Copyright</span> © 2022 Vercel Inc. All rights
                        reserved.
                    </span>
                </div>
                <div></div>
            </section>
        </footer>
    );
};

export default Footer;
