import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // customBg: "#f0f8ff",
        customBg: "#f3f3f3",
      },
      fontFamily: {
        sans: ["DotGothic16", "sans-serif"],
        jersey: ["Jersey10", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
