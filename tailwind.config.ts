import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#D4AF37",
          600: "#C19A2B",
        },
      },
    },
  },
  plugins: [],
};

export default config;