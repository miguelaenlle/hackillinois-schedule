'use client';

import { FC } from "react";
import { NAVBAR_BUTTON_ITEMS } from "./NavbarButtonItems";
import NavbarButton from "./NavbarButton";

const Navbar: FC<{}> = (props) => {

    const handleRedirectToHackIllinois = () => {
        window.location.href = "https://hackillinois.org/";
    }

    return (
        <div className="flex p-4 justify-between">
            <img
                src={"/static/images/hackillinois-logo.png"}
                alt="HackIllinois"
                className="h-12 hover:cursor-pointer"
                onClick={handleRedirectToHackIllinois}
            />
            <div className="flex gap-10 items-center">
                {NAVBAR_BUTTON_ITEMS.map((buttonItem, index) => {
                    return (
                        <NavbarButton
                            key={index}
                            text={buttonItem.text}
                            link={buttonItem.link}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default Navbar