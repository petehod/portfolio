import Head from "next/head";
import React, { useState } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./Header/Header";
import HamburgerMenu from "./Header/HamburgerMenu";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [hamOpen, setHamOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Peter Hodnefield</title>
        <meta
          name="description"
          content="A portfolio of projects for frontend developer Peter Hodnefield"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <style jsx global>{`
        html {
          font-family: ${pjs.style.fontFamily};
        }
      `}</style>
      <HamburgerMenu hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <Header hamOpen={hamOpen} setHamOpen={setHamOpen} />
      <main onClick={() => setHamOpen(false)}>{children}</main>
    </>
  );
};

export default Layout;
