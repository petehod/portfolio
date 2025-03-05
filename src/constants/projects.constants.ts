import { Url } from "next/dist/shared/lib/router/router";

export type Project = {
  id: string;
  title: string;
  logLine: string;
  description: string;
  repo?: Url;
  live: Url;
  tech: string[];
  imagePath: string;
  testCredentials: {
    username: string;
    password: string;
  } | null;
};

const BASE_WEB_STACK = ["React.js", "TypeScript", "Tailwind"];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "691b41b4-d3a5-4476-b4f9-ecf7c2b1b7a9",
    title: "Link Tree Clone",
    repo: "https://github.com/petehod/link-tree-clone",
    live: "https://links.yayadean.com",
    imagePath: "/assets/project-images/links.png",
    logLine: "How I funnel my social media followers",
    description:
      "I didn't want to pay for Link Tree premium, so I built my own. The links you see are real links I use to funnel my social media following.",
    tech: BASE_WEB_STACK,
    testCredentials: null,
  },
  {
    id: "f8b06f4c-4643-4254-aa03-6c00b8e46158",
    title: "Gunna Type Beat",
    live: "https://gunnatypebeat.com",
    imagePath: "/assets/project-images/gtb.png",
    logLine: "Making melody writing simpler",
    description:
      "Gunna Type Beat analyzes songs and gives you the chord progression frequency for an artist. I use this when I am writing guitar melodies, and it has greatly sped up my process. Currently, there are about 15 other producers who regularly use this site.",
    tech: [...BASE_WEB_STACK, "Firebase", "Turborepo"],
    testCredentials: null,
  },
  {
    id: "89be3d8f-8dd5-4583-a9bd-5ca69393d6b2",
    title: "Name Generator",
    live: "https://namegenerator.yayadean.com",
    imagePath: "/assets/project-images/name-generator.png",
    logLine: "Automate another step in the melody creation journey",
    description:
      "Uses ChatGPT to generate names for your beat/melody files. It is customized to include your producer name, as well as an optional key and tempo.",
    tech: [...BASE_WEB_STACK, "ChatGPT"],
    testCredentials: {
      username: "pete.hod1@gmail.com",
      password: "Password1!",
    },
  },
  {
    id: "2e140462-4f15-4017-8947-0a3d90003994",
    title: "Blog Yaya Dean",
    live: "https://blog.yayadean.com",
    repo: "https://github.com/petehod/yaya-dean-blog",
    imagePath: "/assets/project-images/blog.png",
    logLine: "My blog about writing guitar Melodies",
    description:
      "A blog where I can write about the melody creation journey, giving my audience tips to help them improve their skills.",
    tech: [...BASE_WEB_STACK, "MDX"],
    testCredentials: null,
  },
];

export const FEATURED_PRODUCTS = PORTFOLIO_PROJECTS.slice(0, 4);
