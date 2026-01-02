import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
					DEFAULT: "#00E5FF", // Neon Cyan
					foreground: "#000000",
				},
				secondary: {
					DEFAULT: "#FF5722", // Burnt Orange
					foreground: "#ffffff",
				},
				tertiary: {
					DEFAULT: "#050816", // Deep Space Blue
					foreground: "#ffffff",
				},
				accent: {
					DEFAULT: "#FFC107", // Amber
					foreground: "#000000",
				},
				muted: {
					DEFAULT: "rgba(255, 255, 255, 0.05)",
					foreground: "rgba(255, 255, 255, 0.7)",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				popover: {
					DEFAULT: "#050816",
					foreground: "#ffffff",
				},
				card: {
					DEFAULT: "rgba(5, 8, 22, 0.7)",
					foreground: "#ffffff",
				},
			},
			backgroundImage: {
				"gradient-primary": "linear-gradient(to right, #00E5FF, #FFC107)",
				"gradient-secondary": "linear-gradient(to right, #FF5722, #FFC107)",
				"gradient-vignette": "radial-gradient(circle at center, transparent 0%, #050816 100%)",
			},
			fontFamily: {
				sans: ["SF Pro Display", "Inter", "sans-serif"],
				mono: ["SF Mono", "monospace"],
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
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in-down": {
					"0%": { opacity: "0", transform: "translateY(-20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in-left": {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-in-right": {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"blur-in": {
					"0%": { opacity: "0", filter: "blur(10px)" },
					"100%": { opacity: "1", filter: "blur(0)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-up": "fade-in-up 0.5s ease-out forwards",
				"fade-in-down": "fade-in-down 0.5s ease-out forwards",
				"fade-in-left": "fade-in-left 0.5s ease-out forwards",
				"fade-in-right": "fade-in-right 0.5s ease-out forwards",
				"blur-in": "blur-in 0.5s ease-out forwards",
				float: "float 6s ease-in-out infinite",
			},
		},
	},
	plugins: [animate],
} satisfies Config;
