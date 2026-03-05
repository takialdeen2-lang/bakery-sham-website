import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          beige: "#F5F5DC",
          cream: "#FFFDD0",
          brown: "#8B4513",
          olive: "#556B2F",
          gold: "#D4AF37",
          warm: "#FAF9F6",
        },
      },
      fontFamily: {
        arabic: ["var(--font-amiri)", "serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
