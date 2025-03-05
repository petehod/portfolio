import Header from "@components/Header/Header";
export const metadata = {
  title: "Pete's Portfolio",
  description: "My projects and interests",
};
import "../styles/globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pjs.className}>
      <body className="body">
        <Header />
        {children}
      </body>
    </html>
  );
}
