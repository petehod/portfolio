import { Url } from "next/dist/shared/lib/router/router";
import { v4 } from "uuid";
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
    live: "links.yayadean.com",
    imagePath: "/assets/project-images/links.png",
    logLine: "How I funnel my social media followers",
    description:
      "yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya yaya ", // TODO
    tech: BASE_WEB_STACK,
    testCredentials: null,
  },
  {
    id: "f8b06f4c-4643-4254-aa03-6c00b8e46158",
    title: "Gunna Type Beat",
    live: "https://gunnatypebeat.com",
    imagePath: "/assets/project-images/gtb.png",
    logLine: "Making melody writing simpler",
    description: "", // TODO
    tech: [...BASE_WEB_STACK, "Firebase", "Turborepo"],
    testCredentials: null,
  },
  {
    id: "89be3d8f-8dd5-4583-a9bd-5ca69393d6b2",
    title: "Name Generator",
    live: "https://namegenerator.yayadean.com",
    imagePath: "/assets/project-images/name-generator.png",
    logLine: "Automate another step in the melody creation journey",
    description: "", // TODO
    tech: [...BASE_WEB_STACK, "ChatGPT"],
    testCredentials: null,
  },
  {
    id: "2e140462-4f15-4017-8947-0a3d90003994",
    title: "Blog Yaya Dean",
    live: "https://blog.yayadean.com",
    imagePath: "/assets/project-images/blog.png",
    logLine: "My blog about writing guitar Melodies",
    description: "", // TODO
    tech: [...BASE_WEB_STACK, "MDX"],
    testCredentials: null,
  },
];
