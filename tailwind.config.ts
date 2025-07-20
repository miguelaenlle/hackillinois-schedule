import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-crimson-pro)', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        horseBob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: "0%" },
          '100%': { opacity: "100%" },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        horseBob: 'horseBob 2s ease-in-out infinite',
        fadeIn: "fade-in 2s ease-in forwards",
      },
      screens: {
        "mobile": {
          "max": "768px",
        },
        "laptop": {
          "raw": "(max-height: 768px)"
        }
      }

    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
export default config;
