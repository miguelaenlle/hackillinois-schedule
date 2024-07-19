"use client";
import { FC, PropsWithChildren, useContext } from "react";
import { NavbarEnabledContext } from "@/app/contexts/NavbarEnabledContext";
import Navbar from "./Navbar";

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