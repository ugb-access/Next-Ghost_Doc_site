import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Header from "./Header";
const Footer = dynamic(() => import("./Footer"));
const MobileNavbar = dynamic(() => import("./MobileNavbar"));

const StoreLayout = ({ children }) => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false);
    const handleHamburgerClick = () => {
        setOpen(!isOpen);
    };
    useEffect(() => {
        if(isOpen) {
            setOpen(false)
        }
    }, [router])
    return (
        <div>
            <Header
                handleHamburgerClick={handleHamburgerClick}
                isOpen={isOpen}
            />

            <Fragment>
                <div className={"main-section-container "}>
                    {isOpen ? (
                        <div className=" mobile-navbar-container main-section-container ">
                            <MobileNavbar />
                        </div>
                    ) : (
                        children
                    )}
                </div>

                {!isOpen ? <Footer /> : null}
            </Fragment>
        </div>
    );
};

export default StoreLayout;
