import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1e2756", // Navy blue from logo
          foreground: "#ffffff",
          50: "#f0f1f7",
          100: "#d8dbe8",
          200: "#b1b7d1",
          300: "#8993ba",
          400: "#626fa3",
          500: "#4a568c",
          600: "#394273",
          700: "#2d355c",
          800: "#212845",
          900: "#1e2756", // Main navy blue
        },
        secondary: {
          DEFAULT: "#b08968", // Bronze/copper from logo
          foreground: "#ffffff",
          50: "#f9f5f2",
          100: "#f0e6de",
          200: "#e2cebf",
          300: "#d3b69f",
          400: "#c49e80",
          500: "#b08968", // Main bronze
          600: "#9a7052",
          700: "#7d5941",
          800: "#604530",
          900: "#43301f",
        },
        accent: {
          DEFAULT: "#f0f1f7",
          foreground: "#1e2756",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        elegant: "0 10px 30px -10px rgba(30, 39, 86, 0.1)",
        "elegant-lg": "0 20px 40px -15px rgba(30, 39, 86, 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
