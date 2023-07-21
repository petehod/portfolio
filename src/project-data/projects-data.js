import meloroidsImage from "../../public/assets/project-images/meloroids.jpg";
import beatGeniusImage from "../../public/assets/project-images/beat-genius.jpg";
import BWBImage from "../../public/assets/project-images/bwb.jpg";
import akemiImage from "../../public/assets/project-images/akemi.jpg";
import weatherDashImage from "../../public/assets/project-images/weather-dash.jpg";
import NBASOTYImage from "../../public/assets/project-images/nba-soty.jpg";
import mongamongaImage from "../../public/assets/project-images/mongamonga.jpg";
import nancyImage from "../../public/assets/project-images/nancy-coaching.jpg";
import unleashedImage from "../../public/assets/project-images/unleashed.jpg";

export const projectsData = [
  {
    projectTitle: "Meloroids",
    projectLogline: "Music production simplified",
    projectDescription:
      "I created Meloroids to automate many of the decisions that go into making music. Meloroids has a database of popular chords progressions that allow you to generate instant inspiration for your beats and/or melodies. It allows you to create an account and will perfectly format your beat file names for you.",
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
      "Midjourney",
    ],
    projectImage: meloroidsImage,
    projectImageAlt:
      "The landing page for meloroids, which makes melody writing easier.",
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
  },

  {
    projectTitle: "mongamonga",
    projectLogline: "How I collaborate with other music producers",
    projectDescription:
      "mongamonga is my WordPress site where I post my original guitar loops for producers to download. Over the last two years, I have worked with thousands of music producers and have received recognition from industry professionals like Russ.",
    projectShortDescription: "Producer collaboration",

    projectRepository: null,
    projectLive: "https://mongamonga.com/",
    projectTechUsed: ["WordPress", "Elementor", "WooCommerce"],
    projectImage: mongamongaImage,
    projectImageAlt:
      "The landing page for mongamonga, which is a how I collaborate with other music producers.",
  },

  {
    projectTitle: "Brews with Brule",
    projectLogline: "Social media for beer enthusiasts",
    projectDescription:
      "Brews with Brule is a social media environment for friends to make posts when they are having a 'Brew with Brule'. There is also a list of popular breweries around the Twin Cities area.",
    projectShortDescription: "Social media for beer drinkers",

    projectRepository: "https://github.com/petehodnefield/brews-with-brule",
    projectLive: "https://bwb-frontend.vercel.app/",
    projectTechUsed: [
      "MongoDB",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Next.js",
      "React.js",
      "Tailwind CSS",
    ],
    projectImage: BWBImage,
    projectImageAlt:
      "The landing page for Brews with Brule, which is a social media for beer enthusiasts.",
  },
  {
    projectTitle: "Akemi",
    projectLogline: "Landing page for French pop artist Akemi",
    projectDescription:
      "Akemi is a French pop singer whose work has been featured in Elle Magazine. This landing page is a resource for her fans to learn more about her, as well as sign up for her newsletter.",
    projectShortDescription: "Artist site for a pop singer",

    projectRepository: "https://github.com/petehodnefield/akemi",
    projectLive: "https://akemi.onrender.com/",
    projectTechUsed: ["React.js", "CSS"],
    projectImage: akemiImage,
    projectImageAlt: "The landing page for Akemi's website",
  },
  {
    projectTitle: "Weather Dashboard",
    projectLogline: "Weather forecast for a selected city",
    projectDescription:
      "Weather Dashboard allows a user to enter the name of a city. Upon submitting, the user is given a 24-hour forecast for that city, as well as a 5-day forecast. Searches are saved in local storage for future reference.",
    projectShortDescription: "Weather for a selected city",
    projectRepository: "https://github.com/petehodnefield/weather-dashboard",
    projectLive: "https://petehodnefield.github.io/weather-dashboard/ ",
    projectTechUsed: ["HTMl", "CSS", "JavaScript", "OpenWeather API"],
    projectImage: weatherDashImage,
    projectImageAlt:
      "The landing page for Weather Dashboard, where you can get a weather report of a selected city.",
  },
  {
    projectTitle: "NBA Song of the Year",
    projectLogline: "Popular songs from a player's draft year.",
    projectDescription:
      "NBA Song of the Year allows a user to input a current NBA player's name, and receive the most popular songs from that player's draft year. The user's searches are saved in local storage for future reference.",
    projectShortDescription: "Songs from a draft year",

    projectRepository: "https://github.com/petehodnefield/nba-soty",
    projectLive: "https://petehodnefield.github.io/nba-soty/",
    projectTechUsed: [
      "YouTube API",
      "Ball Don't Lie API",
      "HTML",
      "JavaScript",
      "Bulma",
    ],
    projectImage: NBASOTYImage,
    projectImageAlt:
      "The landing page for NBA Song of the Year, where you can see popular songs from an NBA player's draft year.",
  },
  // {
  //   projectTitle: "DEI Calendar",
  //   projectLogline: "Upcoming DEI events for employees",
  //   projectDescription:
  //     "DEI Calendar is a hub for employees to see upcoming DEI-related events. Employees can filter through events based on the culture, and sign up to attend events.",
  //   projectShortDescription: "Upcoming DEI events",

  //   projectRepository: "https://github.com/petehodnefield/project-three",
  //   projectLive: null,
  //   projectTechUsed: ["MongoDB", "GraphQL", "Node.js", "React.js", "CSS"],
  //   projectImage: deiCalendarImage,
  //   projectImageAlt:
  //     "The landing page for DEI Calendar, where employees can learn about DEI-related events.",
  // },
  {
    projectTitle: "Unleashed",
    projectLogline: "Lost pets finder",
    projectDescription:
      "Unleashed is a site where pet owners can make posts about missing pets. They can upload a photo, and write a description of their lost pet. Other users can update where the pet was last seen.",
    projectShortDescription: "Lost pets finder",

    projectRepository: "https://github.com/MegGedde/Unleashed",
    projectLive: null,
    projectTechUsed: [
      "Express.js",
      "Node.js",
      "MySQL",
      "Sequelize",
      "CSS",
      "Handlebars.js",
    ],
    projectImage: unleashedImage,
    projectImageAlt: "The landing page for Unleashed pets finder",
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
