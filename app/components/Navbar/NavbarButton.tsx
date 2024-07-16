import { FC } from "react";

const NavbarButton: FC<{
    text: string;
    link: string;
}> = (props) => {
    const handleRedirectToLink = () => {
        window.location.href = props.link;
    }
    return (
        <p 
            className="text-gray-50 hover:text-gray-300 hover:cursor-pointer transition-colors duration-100"
            onClick={handleRedirectToLink}
        >{props.text}</p>
    );
}
export default NavbarButton