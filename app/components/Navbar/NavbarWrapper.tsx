"use client";
import { FC, PropsWithChildren, useEffect, useState } from "react";

import Navbar from "./Navbar"

const NavbarWrapper: FC<PropsWithChildren<{}>> = (props) => {
    return (
        <div className={"relative"}>
            <Navbar />
            <div className={"z-1"}>
                {props.children}
            </div>
        </div>
    );
}
export default NavbarWrapper