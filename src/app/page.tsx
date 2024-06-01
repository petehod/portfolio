import AboutDescription from "@components/About/AboutDescription";
import AboutProjects from "@components/About/AboutProjects";
import React from "react";

export default function Home() {
  return (
    <section className="about">
      <AboutDescription />
      <AboutProjects />
    </section>
  );
}
