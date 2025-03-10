/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita o modo dark usando a classe 'dark'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        // Cores do tema dark
        dark: {
          background: "#121212",
          surface: "#1E1E1E",
          primary: "#BB86FC",
          secondary: "#03DAC6",
          error: "#CF6679",
          onBackground: "#FFFFFF",
          onSurface: "#FFFFFF",
          onPrimary: "#000000",
          onSecondary: "#000000",
          onError: "#000000",
        },
      },
    },
  },
  plugins: [],
};
