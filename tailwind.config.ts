import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        creme: "var(--creme)",
        textDark: "var(--text-dark)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
export default config;
