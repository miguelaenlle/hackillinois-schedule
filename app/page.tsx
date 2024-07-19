"use client";
import Head from "next/head";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import KeyboardEventProvider from "./context/KeyboardEventContext";
import Backdrop from "./pages/Backdrop";
import Schedule from "./pages/Schedule";
import NavbarEnabledProvider from "./context/NavbarEnabledContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>HackIllinois Schedule</title>
        <meta name="description" content="The schedule of HackIllinois, UIUC's premier student-led hackathon." />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
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
    </>

  );
}
