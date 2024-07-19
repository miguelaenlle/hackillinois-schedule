"use client";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import KeyboardEventProvider from "./context/KeyboardEventContext";
import NavbarEnabledProvider from "./context/NavbarEnabledContext";
import Backdrop from "./pages/Backdrop";
import Schedule from "./pages/Schedule";

export default function Home() {
  return (
    <div>
      <NavbarEnabledProvider>
        <NavbarWrapper>
          <KeyboardEventProvider>
            <Schedule />
          </KeyboardEventProvider>
        </NavbarWrapper>
      </NavbarEnabledProvider>
      <Backdrop />
    </div>
  );
}
