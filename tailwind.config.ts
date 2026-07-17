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
          blue: "#1E5AA8",
          "blue-dark": "#0F2D5C",
          "blue-mid": "#2666BF",
          "blue-light": "#EBF2FF",
          gold: "#F5A623",
          "gold-dark": "#D4901E",
          "gold-light": "#FEF3DC",
          charcoal: "#5A5A5A",
          "charcoal-light": "#6B6B6B",
          gray: "#E8E8E8",
        },
        text: {
          primary: "#1A1A2E",
          secondary: "#4A5568",
          muted: "#718096",
        },
        surface: {
          white: "#FFFFFF",
          gray: "#F8F9FB",
          "gray-2": "#F1F4F8",
        },
        border: {
          DEFAULT: "#E2E8F0",
          light: "#EDF2F7",
        },
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 25px -3px rgba(30,90,168,0.12), 0 4px 6px -4px rgba(30,90,168,0.08)",
        float: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        cta: "0 4px 14px 0 rgba(245,166,35,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.4s ease-out both",
        "slide-in-right": "slideInRight 0.5s ease-out both",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F2D5C 0%, #1E5AA8 60%, #2666BF 100%)",
        "section-gradient": "linear-gradient(180deg, #F8F9FB 0%, #FFFFFF 100%)",
        "cta-gradient": "linear-gradient(135deg, #0F2D5C 0%, #1E5AA8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
