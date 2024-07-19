import React, { useState } from "react";
import NavItem from "./NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { NAVBAR_BUTTON_ITEMS } from "@/app/constants/navbar-button-items";

const Navbar: React.FC = (props) => {
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);
    }

    const handleClose = () => {
        setOpened(false);
    }

    return (
        <div className={`fixed top-0 left-0 flex justify-between flex-col md:flex-row md:items-center transition-colors p-4 w-full z-40 ${opened ? "mobile:bg-zinc-50 mobile:bg-opacity-50 mobile:backdrop-blur-lg mobile:shadow-lg" : ""}`}>
            <div className={"flex justify-between"}>
                <div className={`group flex items-center gap-0 hover:cursor-pointer`}>
                    <a href="https://hackillinois.org/" target="_blank">
                        <img
                            src={"/static/images/hackillinois-logo.png"}
                            alt="HackIllinois"
                            className="h-8 md:h-12 hover:cursor-pointer"
                        />
                    </a>

                </div>
                <div className={"flex flex-col justify-center md:hidden mb-1"}>
                    {
                        opened ? (
                            <div className="flex items-center justify-center w-12 h-12 hover:cursor-pointer" onClick={handleClose} >
                                <FaXmark className={`w-8 h-8 ${opened ? "text-zinc-800 hover:text-gray-600" : "text-zinc-400 hover:text-white"} transition-all`} />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center w-12 h-12 hover:cursor-pointer" onClick={handleOpen} >
                                <GiHamburgerMenu className={`w-8 h-8 text-zinc-400 hover:text-white transition-all hover:cursor-pointer`} />
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={`flex-col md:flex-row mt-5 md:mt-0 ${((opened)) ? "flex" : "hidden md:flex"} transition-all gap-1 md:gap-10`}>
                {NAVBAR_BUTTON_ITEMS.map((buttonItem, index) => {
                    return <NavItem link={buttonItem.link} text={buttonItem.text} key={`nav-item-${index}`} opened={opened} redirect />
                })}
            </div>
        </div>
    );
};
export default Navbar;