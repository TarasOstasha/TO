/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070d",
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
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
        "overline": ["0.6875rem", { letterSpacing: "0.22em", fontWeight: 600 }]
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 222, 255, 0.35)",
        "glow-sm": "0 0 20px rgba(74, 222, 255, 0.2)",
        "glow-md": "0 0 60px rgba(74, 222, 255, 0.25)",
        "glow-border": "0 0 0 1px rgba(74, 222, 255, 0.3), 0 0 24px rgba(74, 222, 255, 0.15)"
      }
    }
  },
  plugins: []
};

