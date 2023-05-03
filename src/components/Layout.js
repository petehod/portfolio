import Head from "next/head";
import React from "react";

import { Plus_Jakarta_Sans } from "next/font/google";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Layout = ({ children }) => {
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
      <main>{children}</main>
    </>
  );
};

export default Layout;
