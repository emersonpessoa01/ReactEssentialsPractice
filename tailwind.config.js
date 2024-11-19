/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#4caf50", // Cor primária personalizada
      secondary: "#2e7d32", // Cor secundária personalizada
    },
    animation: {
      spinSlow: "spin 2s linear infinite", // Duração de 2 segundos
      spinFast: "spin 500ms linear infinite", // Duração de 0.5 segundo
    },
  },
};
export const plugins = [];
