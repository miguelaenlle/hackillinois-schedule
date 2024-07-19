import { createContext, FC, PropsWithChildren, useState } from "react";

interface NavbarEnabledContextInterface {
    navbarEnabled: boolean,
    onSetNavbarEnabled: (enabled: boolean) => void
}

export const NavbarEnabledContext = createContext<NavbarEnabledContextInterface | null>(null);

const NavbarEnabledProvider: FC<PropsWithChildren<{}>> = (props) => {
    const [navbarEnabled, setNavbarEnabled] = useState<boolean>(true);

    const handleSetNavbarEnabled = (enabled: boolean) => {
        setNavbarEnabled(enabled);
    }

    return (
        <NavbarEnabledContext.Provider value={{ navbarEnabled, onSetNavbarEnabled: handleSetNavbarEnabled }}>
            {props.children}
        </NavbarEnabledContext.Provider>
    )
}


export default NavbarEnabledProvider;