import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0080C6",
          "blue-dark": "#002A5C",
          "blue-light": "#4DA6D9",
          yellow: "#FFC20E",
          "yellow-dark": "#E5AD00",
        },
      },
    },
  },
  plugins: [],
};

export default config;
