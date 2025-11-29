/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Dark background
                secondary: "#1e293b", // Slightly lighter
                accent: "#38bdf8", // Neon blue
                "accent-glow": "#0ea5e9",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },
    plugins: [],
}
