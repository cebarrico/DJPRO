import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050816",
        surface: "#0a0f24",
        "surface-2": "#0d1330",
        line: "rgba(148, 163, 255, 0.14)",
        electric: "#4361ee",
        violet: "#7b2ff7",
        magenta: "#ff2ea6",
        ice: "#eef1ff",
        mist: "#a3aecb",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "beam-1":
          "radial-gradient(60% 60% at 20% 20%, rgba(123,47,247,0.35) 0%, rgba(5,8,22,0) 70%)",
        "beam-2":
          "radial-gradient(50% 50% at 85% 15%, rgba(255,46,166,0.28) 0%, rgba(5,8,22,0) 70%)",
        "neon-line":
          "linear-gradient(90deg, #4361ee 0%, #7b2ff7 50%, #ff2ea6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(123,47,247,0.35)",
        "glow-sm": "0 0 20px rgba(67,97,238,0.35)",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
