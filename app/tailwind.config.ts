import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust if using src/
  ],
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