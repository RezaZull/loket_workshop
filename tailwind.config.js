import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                width: {
                    "1p": "1%",
                    "2p": "2%",
                    "3p": "3%",
                    "4p": "4%",
                    "5p": "5%",
                    "6p": "6%",
                    "7p": "7%",
                    "8p": "8%",
                    "9p": "9%",
                    "10p": "10%",
                    "11p": "11%",
                    "12p": "12%",
                    "13p": "13%",
                    "14p": "14%",
                    "15p": "15%",
                    "16p": "16%",
                    "17p": "17%",
                    "18p": "18%",
                    "19p": "19%",
                    "20p": "20%",
                    "21p": "21%",
                    "22p": "22%",
                    "23p": "23%",
                    "24p": "24%",
                    "25p": "25%",
                    "26p": "26%",
                    "27p": "27%",
                    "28p": "28%",
                    "29p": "29%",
                    "30p": "30%",
                    "31p": "31%",
                    "32p": "32%",
                    "33p": "33%",
                    "34p": "34%",
                    "35p": "35%",
                    "36p": "36%",
                    "37p": "37%",
                    "38p": "38%",
                    "39p": "39%",
                    "40p": "40%",
                    "41p": "41%",
                    "42p": "42%",
                    "43p": "43%",
                    "44p": "44%",
                    "45p": "45%",
                    "46p": "46%",
                    "47p": "47%",
                    "48p": "48%",
                    "49p": "49%",
                    "50p": "50%",
                    "51p": "51%",
                    "52p": "52%",
                    "53p": "53%",
                    "54p": "54%",
                    "55p": "55%",
                    "56p": "56%",
                    "57p": "57%",
                    "58p": "58%",
                    "59p": "59%",
                    "60p": "60%",
                    "61p": "61%",
                    "62p": "62%",
                    "63p": "63%",
                    "64p": "64%",
                    "65p": "65%",
                    "66p": "66%",
                    "67p": "67%",
                    "68p": "68%",
                    "69p": "69%",
                    "70p": "70%",
                    "71p": "71%",
                    "72p": "72%",
                    "73p": "73%",
                    "74p": "74%",
                    "75p": "75%",
                    "76p": "76%",
                    "77p": "77%",
                    "78p": "78%",
                    "79p": "79%",
                    "80p": "80%",
                    "81p": "81%",
                    "82p": "82%",
                    "83p": "83%",
                    "84p": "84%",
                    "85p": "85%",
                    "86p": "86%",
                    "87p": "87%",
                    "88p": "88%",
                    "89p": "89%",
                    "90p": "90%",
                    "91p": "91%",
                    "92p": "92%",
                    "93p": "93%",
                    "94p": "94%",
                    "95p": "95%",
                    "96p": "96%",
                    "97p": "97%",
                    "98p": "98%",
                    "99p": "99%",
                },
                fontFamily: {
                    poppins: ["Poppins", "sans-serif"],
                    dm: ["DM Sans", "sans-serif"],
                },
                boxShadow: {
                    "3xl": "14px 17px 40px 4px",
                    inset: "inset 0px 18px 22px",
                    darkinset: "0px 4px 4px inset",
                },
                borderRadius: {
                    primary: "20px",
                },
            },
            screens: {
                sm: "576px",
                "sm-max": {
                    max: "576px"
                },
                md: "768px",
                "md-max": {
                    max: "768px"
                },
                lg: "992px",
                "lg-max": {
                    max: "992px"
                },
                xl: "1200px",
                "xl-max": {
                    max: "1200px"
                },
                "2xl": "1320px",
                "2xl-max": {
                    max: "1320px"
                },
                "3xl": "1600px",
                "3xl-max": {
                    max: "1600px"
                },
                "4xl": "1850px",
                "4xl-max": {
                    max: "1850px"
                },
            },
            colors: () => ({
                white: "#ffffff",
                lightPrimary: "#F4F7FE",
                blueSecondary: "#4318FF",
                brandLinear: "#868CFF",
                gray: {
                    50: "#f8f9fa",
                    100: "#edf2f7",
                    200: "#e9ecef",
                    300: "#cbd5e0",
                    400: "#a0aec0",
                    500: "#adb5bd",
                    600: "#a3aed0",
                    700: "#707eae",
                    800: "#252f40",
                    900: "#1b2559",
                },
                navy: {
                    50: "#d0dcfb",
                    100: "#aac0fe",
                    200: "#a3b9f8",
                    300: "#728fea",
                    400: "#3652ba",
                    500: "#1b3bbb",
                    600: "#24388a",
                    700: "#1B254B",
                    800: "#111c44",
                    900: "#0b1437",
                },
                red: {
                    50: "#ee5d501a",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#f53939",
                    600: "#ea0606",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d",
                },
                orange: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                },
                amber: {
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
                },
                yellow: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#fbcf33",
                    500: "#eab308",
                    600: "#ca8a04",
                    700: "#a16207",
                    800: "#854d0e",
                    900: "#713f12",
                },
                lime: {
                    50: "#f7fee7",
                    100: "#ecfccb",
                    200: "#d9f99d",
                    300: "#bef264",
                    400: "#98ec2d",
                    500: "#82d616",
                    600: "#65a30d",
                    700: "#4d7c0f",
                    800: "#3f6212",
                    900: "#365314",
                },
                green: {
                    50: "#05cd991a",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#17ad37",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },
                teal: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a",
                },
                cyan: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#21d4fd",
                    500: "#17c1e8",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
                blue: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2152ff",
                    700: "#1d4ed8",
                    800: "#344e86",
                    900: "#00007d",
                },
                indigo: {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                    800: "#3730a3",
                    900: "#312e81",
                },
                purple: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7928ca",
                    800: "#6b21a8",
                    900: "#581c87",
                },
                pink: {
                    50: "#fdf2f8",
                    100: "#fce7f3",
                    200: "#fbcfe8",
                    300: "#f9a8d4",
                    400: "#f472b6",
                    500: "#ff0080",
                    600: "#db2777",
                    700: "#be185d",
                    800: "#9d174d",
                    900: "#831843",
                },
                brand: {
                    50: "#E9E3FF",
                    100: "#C0B8FE",
                    200: "#A195FD",
                    300: "#8171FC",
                    400: "#7551FF",
                    500: "#422AFB",
                    600: "#3311DB",
                    700: "#2111A5",
                    800: "#190793",
                    900: "#11047A",
                },
                shadow: {
                    500: "rgba(112, 144, 176, 0.08)",
                },
            }),
        },
        plugins: [forms, require("tailwindcss-rtl")]
    }
};
