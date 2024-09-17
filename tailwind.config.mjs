// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
// };

// const defaultTheme = require("tailwindcss/defaultTheme");

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
// };

/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
