import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import AboutDescription from "@/components/About/AboutDescription";
import AboutProjects from "@/components/About/AboutProjects";

export default function Home() {
  return (
    <section className="about">
      <AboutDescription />
      <AboutProjects />
    </section>
  );
}
