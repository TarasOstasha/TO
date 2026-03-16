import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05060A",
        surface: "#0B0D16",
        accent: {
          DEFAULT: "#4ADEFF",
          soft: "#1B9EFF"
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        display: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 222, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

