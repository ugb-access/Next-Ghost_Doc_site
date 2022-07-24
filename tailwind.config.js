/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/*.js"],
    theme: {
        extend: {
            flex: {
                100: "1 1 100%",
            },
            colors: {
                secondary: "#666",
            },
        },
    },
    plugins: [],
};
