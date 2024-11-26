/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Habilita o suporte ao tema escuro via classes
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Caminhos para seus arquivos
    "./index.html", // Certifique-se de incluir o HTML ou outros arquivos que utilizam Tailwind
  ],
  theme: {
    extend: {
      colors: {
        "red-custom": "#FF0000", // Cor personalizada em hexadecimal
        "blue-custom": "#0000FF", // Outra cor personalizada
      },
      zIndex: {
        // Adicione outras z-index personalizadas aqui
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        1000: "1000",
        2000: "2000",
      },
    }, // Adicione personalizações aqui se necessário
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ], // Adicione plugins aqui, se necessário
};
