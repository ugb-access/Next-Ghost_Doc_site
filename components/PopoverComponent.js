import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
const solutions = [
    {
        name: "CLI",
        href: "/cli"
    },
    {
        name: "Project Config",

        href: "/project-config",
    },
    {
        name: "Runtimes",

        href: "/runtimes",
    },
    {
        name: "Integrations",

        href: "/integration",
    },
    {
        name: "Deploy Button",

        href: "/deploy",
    },
    {
        name: "Rest Api",

        href: "/rest-api",
    },
];
const PopoverComponent = () => {
    return (
        <div className="">
            <Popover className="relative mb-[3px]">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                        ${open ? "" : "text-opacity-90"}
                        group  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
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
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-48 max-w-[200px] -translate-x-1/2 transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-white p-7 ">
                                        {solutions.map((item) => (
                                            <Link
                                                href={item.href}
                                                key={item.name}
                                            >
                                                <a className="-m-3 hover:text-black text-secondary flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                                    <div className="">
                                                        <p className="text-sm ">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default PopoverComponent;
