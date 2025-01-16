import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: "var(--main-color)",
        secondcolor: "var(--second-color)",
        textcolor: "var(--text-color)",
        containercolor: "var(--container-color)",
        bgcolor: "var(--bg-color)",
        textaltercolor: "var(--text-alter-color)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfairs: ["Playfair Display", "serif"]
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
