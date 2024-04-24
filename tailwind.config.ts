import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'stars-image': 'url("/assets/bg.png")',
            },
            colors: {
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                background: "#FFFFFF", // or DEFAULT
                foreground: "#11181C", // or 50 to 900 DEFAULT
                primary: {
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                    foreground: "#FFFFFF",
                    DEFAULT: "#f59e0b",
                },
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()]
};
export default config;
