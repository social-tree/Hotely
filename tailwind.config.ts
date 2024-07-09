import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackish-green": "#112211",
        "mint-green": "#8dd3bb",
        slamon: "#ff8682",
        Neutrals: "#ffffff",

        "primary-hover": "#9BE0C8",
        "primary-focus": "#a5ebd3",
        "primary-active": "#82CBB2",
        "primary-disabled": "#D2D1D3",

        "secondary-hover": "#9be0c8",
        "secondary-focus": "#8dd3bb",
        "secondary-disabled": "#d2d1d3",

        "tertiary-hover": "#82cbb2",
        "tertiary-focus": "#112211",
        "tertiary-active": "#82cbb2",
        "tertiary-disabled": "#8f8c91",

        "text-disabled": "#8f8c91",
      },
      boxShadow: {
        "cards-shadow": "0rem 0.25rem 1rem 0rem rgba(17, 34, 17, 0.05)",
        new: "2.8125rem 2.1875rem 2.5rem 0rem rgba(17, 34, 17, 0.1)",
        shadowsm: "0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05)",
        shadowbase: "0rem 0.0625rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.1)",
        shadowmd: "0rem 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.1)",
        shadowlg: "0rem 0.25rem 0.375rem -0.25rem rgba(0, 0, 0, 0.1)",
        shadowxl: "0rem 0.5rem 0.625rem -0.375rem rgba(0, 0, 0, 0.1)",
        shadow2xl: "0rem 1.5625rem 3.125rem -0.75rem rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Gothic A1", "sans-serif"],
      },
      fontSize: {
        "heading-xl": ["48px", "49px"],
        "heading-l": ["40px", "49px"],
        "heading-m": ["36px", "44px"],
        "heading-s": ["32px", "39px"],
        "paragraph-l": ["24px", "29px"],
        "paragraph-m": ["20px", "24px"],
        "paragraph-s": ["16px", "20px"],
      },
      spacing: {
        "section-padding": "2rem",
        "button-padding": "1rem 2rem",
      },
      borderRadius: {
        "button-radius": "4px",
      },
      backgroundImage: {
        "hero-image":
          "linear-gradient(to right , #00234D -20%, #00234D60 60%) ,url('/images/hero-background.jpg')",
      },
      height: {
        "132": "33rem",
      },
    },
  },
  plugins: [],
};

export default config;
