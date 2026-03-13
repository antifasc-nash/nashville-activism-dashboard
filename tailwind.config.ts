import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Nashville Activism Brand Kit
        brand: {
          navy: "#0F172A",     // Vigilant Navy (Background)
          coalition: "#1E293B", // Secondary Surface
          yellow: "#FDE047",    // Rally Yellow (Action)
          green: "#22C55E",     // Progress Green (Success)
          red: "#EF4444",       // Mobilize Red (Urgency)
          paper: "#F8FAFC",     // Primary Text
          slate: "#94A3B8",     // Muted Text
        },
      },
      borderRadius: {
        'nad': '8px', // Your consistent corner radius
      },
    },
  },
  plugins: [],
};
export default config;
