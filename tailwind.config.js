/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    '0%': { width: '0%' },
                    '50%': { width: '100%' },
                    '100%': { width: '0%' },  // Resets the width to 0% to create the repeat effect
                },
                blink: {
                    '0%, 100%': { 'border-color': 'transparent' },
                    '50%': { 'border-color': 'black' },
                },
            },
            animation: {
                typing: 'typing 4s steps(20, end) infinite, blink 0.75s step-end infinite',
            },
        },
    },
    plugins: [],
}