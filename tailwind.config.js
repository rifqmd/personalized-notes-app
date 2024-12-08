/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        PrimaryColor: "#27374D",
        SecondaryColor: "#526D82",
        PrimaryTextColor: "#DDE6ED",
        BorderPrimaryColor: "#9DB2BF",
      },
    },
  },
  plugins: [],
};
