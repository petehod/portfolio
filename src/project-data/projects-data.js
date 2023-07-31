import meloroidsImage from "../../public/assets/project-images/meloroids.jpg";
import beatGeniusImage from "../../public/assets/project-images/beat-genius.jpg";
import BWBImage from "../../public/assets/project-images/bwb.jpg";
import akemiImage from "../../public/assets/project-images/akemi.jpg";
import weatherDashImage from "../../public/assets/project-images/weather-dash.jpg";
import NBASOTYImage from "../../public/assets/project-images/nba-soty.jpg";
import mongamongaImage from "../../public/assets/project-images/mongamonga.jpg";
import onePercentImage from "../../public/assets/project-images/one-percent-better.png";
import nancyImage from "../../public/assets/project-images/nancy-coaching.jpg";
import unleashedImage from "../../public/assets/project-images/unleashed.jpg";

export const projectsData = [
  {
    projectTitle: "Meloroids",
    projectLogline: "Applying Pareto’s Principle to melody creation",
    projectDescription:
      "Meloroids is what I use on a daily basis to write melodies. It is a database populated with the most successful chord progressions in the genres I write in the most.",
    projectShortDescription: "Melody creation simplified",
    projectRepository: "https://github.com/petehodnefield/meloroids-typescript",
    projectLive: "https://meloroids.io",
    projectTechUsed: [
      "MongoDB",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Next.js",
      "React.js",
      "Tailwind CSS",
    ],
    projectImage: meloroidsImage,
    projectImageAlt:
      "The landing page for meloroids, which makes melody writing easier.",
    projectCredentials: {
      username: "testuser",
      password: "password"
		}
  },
	
  
  {
    projectTitle: "One Percent Better",
    projectLogline: "Practicing Growth Mindset",
    projectDescription:
      "One Percent Better combines the 1% Improvements idea from James Clear&apos;s Atomic Habits and Growth Mindset. Users can create areas of focus and add a new improvement in each area every 24 hours. Each improvement adds a datapoint that shows the user improving by 1% every time a data point is added.",
    projectShortDescription: "Growth mindset",
    projectRepository: "https://github.com/petehodnefield/one-percent-better",
    projectLive: "https://one-percent-better-e5v77fvub-petehodnefield.vercel.app/",
    projectTechUsed: [
      "MongoDB",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Next.js",
      "React.js",
      "Midjourney",
      "Chart.js",
    ],
    projectImage: onePercentImage,
    projectImageAlt:
      "The landing page for 1% Better, which focuses on practicing growth mindset",
		projectCredentials: {
			username: "testuser",
			password: "password"
		}
  },
  {
    projectTitle: "BeatGenius",
    projectLogline:
      "Custom music production from an exclusive producer collective.",
    projectDescription:
      "BeatGenius is the landing pages for musical artists to purchase custom music production from a collective of producers. Clients can select 3 different packages. ",
    projectShortDescription: "Customized music production",

    projectRepository: "https://github.com/petehodnefield/beat-genius",
    projectLive: "https://beat-genius.vercel.app/",
    projectTechUsed: ["React.js", "Next.js", "CSS"],
    projectImage: beatGeniusImage,
    projectImageAlt:
      "The landing page for BeatGenius, which provides custom music production.",
    projectCredentials: null
  },
  {
    projectTitle: "Nancy Johnson Coaching",
    projectLogline: "Website for a professional coach",
    projectDescription:
      "Nancy Johnson Coaching is the sitefor a professional coach focused on mentoring young female professionals. This site represents her brand and is used to gain and keep clients.",
    projectShortDescription: "Professional coaching website",

    projectRepository: "https://github.com/petehodnefield/nancy-coaching",
    projectLive: "https://nancy-coaching.vercel.app/",
    projectTechUsed: ["React.js", "Next.js", "CSS", "MidJourney", "Chat GPT"],
    projectImage: nancyImage,
    projectImageAlt:
      "The landing page for Nancy Johnson Coaching, which is the site she uses to gain new clients for her coaching business.",
    projectCredentials: null
  },

];

// {
//   projectTitle: '',
//   projectLogline: '',
//   projectDescription: '',
//   projectRepository: '',
//   projectLive: '',
//   projectTechUsed: [""],
//   projectImage: '',
//   projectImageAlt: '',

// }
