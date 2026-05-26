import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#112235",
        ocean: "#05668d",
        teal: "#00a6a6",
        coral: "#f2644b",
        amber: "#f7b538",
        paper: "#fbfaf7",
        mist: "#e9f7f6"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(17, 34, 53, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
