import React from "react";

const NavItem: React.FC<{
    link: string;
    text: string;
    redirect?: boolean;
    opened?: boolean;
}> = (props) => {
    return (
        <a
            href={props.link}
            target={props.redirect ? "_blank" : ""}
            className={
                `opacity-75 text-lg md:align-middle cursor-pointer text-gray-50 hover:text-gray-300 ${props.opened ? "mobile:text-black mobile:font-bold mobile:hover:text-gray-600 mobile:text-lg" : ""} transition-all`
            }
        >
            <div className="flex items-center h-12 font-sans">
                {props.text}
            </div>
        </a>
    );
};

export default NavItem;