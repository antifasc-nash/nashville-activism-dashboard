import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-slate': '#94A3B8',
        'brand-coalition': '#1E293B',
        'brand-yellow': '#FDE047',
        'vigilant-navy': '#0F172A',
        'brand-paper': '#F8FAFC',
      },
      borderRadius: {
        'nad': '0.75rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
