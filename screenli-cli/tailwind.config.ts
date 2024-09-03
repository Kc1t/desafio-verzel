import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tv: "2100px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "background-dark": "#050607",
        "sub-dark": "#10161D",
        "contrast-dark": "#252525",
        "border-base": "#D4D7E3",
        "primary": "#FFFFFF",
        "primary-60": "#FFFFFF99",
        "secondary": "#D5D5D5",
        "tertiary": "#9CA3AF",
        "color-red": "#9F0B0E",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
