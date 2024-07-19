"use client";
import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";

import Navbar from "./Navbar"
import { NavbarEnabledContext } from "@/app/context/NavbarEnabledContext";

const NavbarWrapper: FC<PropsWithChildren<{}>> = (props) => {
    const navbarEnabledContext = useContext(NavbarEnabledContext);
    return (
        <div className={"relative"}>
            {navbarEnabledContext?.navbarEnabled && (
                <Navbar />
            )}
            <div className={"z-1"}>
                {props.children}
            </div>
        </div>
    );
}
export default NavbarWrapper