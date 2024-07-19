"use client";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import KeyboardEventProvider from "./contexts/KeyboardEventContext";
import NavbarEnabledProvider from "./contexts/NavbarEnabledContext";
import Backdrop from "./pages/Backdrop/Backdrop";
import Schedule from "./pages/Schedule/Schedule";

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
