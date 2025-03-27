module.exports = {
  content: ["./**/*.{html,js}"], // Scan HTML and JS files in the frontend directory
  theme: {
    extend: {
      colors: {
        primary: "#FF5A5F",     // Rojo vibrante
        secondary: "#3D5A80",   // Azul educativo
        accent: "#FFB400",      // Amarillo énfasis
        dark: "#2A2A2A",        // Casi negro texto
        light: "#F9F9F9",       // Blanco roto fondo
        panel1: "#E0FBFC",     // Azul muy claro
        panel2: "#FFF1D0",     // Amarillo muy claro
        panel3: "#FFE5E5",     // Rosa muy claro
      },
      fontFamily: {
        heading: ["Bangers", "cursive"], // Títulos estilo cómic
        body: ["Nunito", "sans-serif"],  // Cuerpo legible
        mono: ["Roboto Mono", "monospace"], // Código
      },
    },
  },
  plugins: [],
}
