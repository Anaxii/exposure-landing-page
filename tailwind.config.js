/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    backgroundImage: {
      linear: "linear-gradient(0deg, #3341F5 -0.06%, #5E69FF 99.91%)",
      "hover-linear":
        "linear-gradient(0deg, rgba(51,65,245, 0.95) -0.06%, rgba(94,105,255, 0.95) 99.91%)",
      "home-hero": "linear-gradient(transparent 90%, white), url('../../public/images/Home.svg')",
      "section-tools": "url('../../public/images/Group 56 (4).svg')",
      "section-invest":
        "linear-gradient(0.47deg, rgba(53, 67, 245, 0.05) 0.15%, rgba(53, 67, 245, 0) 99.34%)",
      "email-subscription": "url('../../public/images/Group 59 (2).svg')",
    },
    boxShadow: {
      100: "0px 25px 50px rgba(18, 0, 129, 0.05)",
      200: "0px 2px 4px rgba(18, 0, 129, 0.02)",
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      primary: {
        0: "#EBECEF",
        50: "#C7C9FF",
        100: "#CFD4FF",
        150: "#5460FD",
        200: "#9798BD",
        700: "#3341F5",
        800: "#494D89",
        850: "#2F3479",
        900: "#2E316A",
      },
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    fontSize: {
      base: [
        "14px",
        {
          lineHeight: "28px",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      md: [
        "20px",
        {
          lineHeight: "52px",
        },
      ],
      lg: [
        "26px",
        {
          lineHeight: "52px",
        },
      ],
      xl: [
        "36px",
        {
          lineHeight: "52px",
        },
      ],
      "2xl": [
        "60px",
        {
          lineHeight: "75px",
        },
      ],
    },
  },
  plugins: [],
};
