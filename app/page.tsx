"use client";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import KeyboardEventProvider from "./context/KeyboardEventContext";
import Backdrop from "./pages/Backdrop";
import Schedule from "./pages/Schedule";

export default function Home() {
  return (
    <>
      <NavbarWrapper>
        <KeyboardEventProvider>
          <Schedule />
        </KeyboardEventProvider>
      </NavbarWrapper>
      <Backdrop />
    </>

  );
}
