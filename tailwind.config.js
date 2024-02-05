/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: { DEFAULT: "15px" },
      screen: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1330px",
      },
      center: true,
    },
    extend: {
      colors: {
        dark: "#000",
        lightBrown: "#BFA6A2",
        darkBrown: "#420000",
        oily: "#AEA9BB",
        logo: "#00E0BB",
      },
      fontFamily: { monto: "Montserrat", title: "Lilita One" },
    },
  },
  plugins: [],
};
