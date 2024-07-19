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
                `opacity-75 text-md hover:cursor-pointer text-gray-50 hover:text-gray-300 ${props.opened ? "mobile:text-black mobile:hover:text-gray-600 mobile:text-lg" : ""} transition-all`
            }
        >
            {props.text}
        </a>
    );
};

export default NavItem;