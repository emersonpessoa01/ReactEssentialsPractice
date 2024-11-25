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
    }, // Adicione personalizações aqui se necessário
  },
  plugins: [], // Adicione plugins aqui, se necessário
};
