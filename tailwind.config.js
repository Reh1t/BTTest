/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "kuno-red": "#000",
        "kuno-greywhite": "#f7f7f7",
        sandybrown: "#fda152",
        chocolate: {
          "100": "#c96e1f",
          "200": "rgba(201, 110, 31, 0.09)",
        },
        font: "#1e1e1e",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        orangered: "#fc4b08",
        whitesmoke: "#eaeaea",
        dodgerblue: {
          "100": "#249cff",
          "200": "#0982fe",
        },
        "grey-line": "#737b7d",
        "input-text": "#8e8e8e",
      },
      spacing: {},
      fontFamily: {
        "text-regular-normal": "Roboto",
        "footer-bold-text": "Ubuntu",
        inherit: "inherit",
      },
      borderRadius: {
        mini: "15px",
        "8xs": "5px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      xl: "20px",
      "7xl": "26px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1024px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
