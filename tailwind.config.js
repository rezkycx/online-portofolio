/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
import daisyui from "daisyui"


export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
});

