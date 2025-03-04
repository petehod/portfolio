import meloroidsImage from "../../public/assets/project-images/meloroids.jpg";
import beatGeniusImage from "../../public/assets/project-images/beat-genius.jpg";
import onePercentImage from "../../public/assets/project-images/one-percent-better.png";
import nancyImage from "../../public/assets/project-images/nancy-coaching.jpg";

export const projectsData = [
  {
    title: "Meloroids",
    logline: "Applying Pareto’s Principle to melody creation",
    description:
      "Meloroids is what I use on a daily basis to write melodies. It is a database populated with the most successful chord progressions in the genres I write in the most.",
    shortDescription: "Melody creation simplified",
    repository: "https://github.com/petehodnefield/meloroids-typescript",
    live: "https://meloroids.io",
    tech: [
      "MongoDB",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "JWT",
    ],
    image: meloroidsImage,
    alt: "The landing page for meloroids, which makes melody writing easier.",
    credentials: {
      username: "testuser",
      password: "Password1!",
    },
  },

  {
    title: "One Percent Better",
    logline: "Practicing Growth Mindset",
    description:
      "One Percent Better is about getting 1% better at a chosen area every day. This is inspired from the book Atomic Habits. Users can create areas of focus and add a new improvement in each area every 24 hours. Each improvement adds a datapoint that shows the user improving by 1%.",
    shortDescription: "Growth mindset",
    repository: "https://github.com/petehodnefield/one-percent-better",
    live: "https://one-percent-better.vercel.app/",
    tech: [
      "MongoDB",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Next.js",
      "React.js",
      "Midjourney",
      "Chart.js",
      "JWT",
    ],
    image: onePercentImage,
    alt: "The landing page for 1% Better, which focuses on practicing growth mindset",
    credentials: {
      username: "testuser",
      password: "password",
    },
  },
  {
    title: "BeatGenius",
    logline: "Custom music production from an exclusive producer collective.",
    description:
      "BeatGenius is the landing pages for musical artists to purchase custom music production from a collective of producers. Clients can select 3 different packages. ",
    shortDescription: "Customized music production",

    repository: "https://github.com/petehodnefield/beat-genius",
    live: "https://beat-genius.vercel.app/",
    tech: ["React.js", "Next.js", "CSS"],
    image: beatGeniusImage,
    alt: "The landing page for BeatGenius, which provides custom music production.",
    credentials: null,
  },
  {
    title: "Nancy Johnson Coaching",
    logline: "Website for a professional coach",
    description:
      "Nancy Johnson Coaching is the site for a (fictional) professional coach focused on mentoring young female professionals. This site represents her brand and is used to gain and keep clients.",
    shortDescription: "Professional coaching website",
    repository: "https://github.com/petehodnefield/nancy-coaching",
    live: "https://nancy-coaching.vercel.app/",
    tech: ["React.js", "Next.js", "CSS", "MidJourney", "Chat GPT"],
    image: nancyImage,
    alt: "The landing page for Nancy Johnson Coaching, which is the site she uses to gain new clients for her coaching business.",
    credentials: null,
  },
];

// {
//   title: '',
//   logline: '',
//   description: '',
//   repository: '',
//   live: '',
//   tech: [""],
//   image: '',
//   alt: '',

// }
