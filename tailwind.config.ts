import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      0.625: "0.625rem",
      0.75: "0.75rem",
      0.875: "0.875rem",
      1: "1rem",
      1.125: "1.125rem",
      1.25: "1.25rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(360deg, rgba(255, 255, 255, 1) 0%, rgba(211, 181, 225, 0.3575805322128851) 100%)",
      },

      colors: {
        primary: "#b525f8",
        primaryFaded: "rgba(202, 108, 248, 0.15)",
        secondary: "#C9ABD9",
        tertiary: "#EFECF0",
        quad: "#423D47",
        white: "#ffffff",
        light: "#E1E1E1",
        medium: "#7D7D7D",
        dark: "#2c2c2c",
        darkScreen: "rgba(44,44,44,0.6)",
        darklight: "rgba(44,44,44,0.85)",
        black: "#111111",
        blue: "#3B7EE2",
        green: "#37E1EC",
        red: "#EE1515",
        deny: "#EE1515",
        denyLight: "rgba(238, 21, 21, 0.1)",
        confirm: "#177055",
        confirmLight: "#7CD7BC",
      },
      minHeight: {
        350: "350px",
        400: "400px",
        600: "600px",
        800: "800px",
      },
      maxHeight: {
        14: "14rem",
        300: "300px",
      },
      height: {
        325: "325px",
        400: "400px",
        600: "600px",
        800: "800px",
        1000: "1000px",
      },
      width: {
        15: "15rem",
        70: "70rem",
        64: "64rem",
        60: "60rem",
        62: "16rem",
        40: "40rem",
      },
      maxWidth: {
        xxxs: "12rem",
        xxs: "16rem",
        660: "660px",
        16: "16rem",
        21: "21rem",
        24: "24rem",
        26: "26rem",
        30: "30rem",
        46: "46rem",
        48: "48rem",
        58: "58rem",
        70: "70rem",
        112: "28rem",
      },
      spacing: {
        88: "22rem",
        112: "28rem",
      },
      boxShadow: {
        "3xl": "0 8px 16px 0 rgba(44, 44, 44, 0.25)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      borderWidth: {
        1: "1px",
      },
      flex: {
        1.33: "1.3 1.3 0",
        2: "2 1 0",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      flexBasis: {
        "1/10": "10%",
      },
    },
  },
  plugins: [],
};
export default config;
