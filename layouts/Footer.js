import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" w-full text-sm border-[#eaeaea] border-t p-6 pt-7 ">
            <nav className=" mx-auto max-w-7xl flex flex-nowrap justify-between ">
                <div className=" pt-3 ">
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
                <div className="pt-3 mr-6 ">
                    <div className="footer-links-header my-3">Frameworks</div>
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
                <div className="pt-3 mr-6">
                    <div className="footer-links-header my-3">Resources</div>

                    <div className="footer-links-inner-container">
                        <li className=" list-none py-2 ">
                            <Link href={"/docs"}>
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
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Command-Line</a>
                            </Link>
                        </li>
                        <li className=" list-none py-2 ">
                            <Link href={"/vue"}>
                                <a>Integrations</a>
                            </Link>
                        </li>
                    </div>
                </div>

                <div className="pt-3 mr-6">
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

                <div className="pt-3 ">
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
                <div>
                    
                </div>
            </section>
        </footer>
    );
};

export default Footer;
