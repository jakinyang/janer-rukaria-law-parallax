/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "testimonials": "url('/images/background-yellow-testimonials.png')",
        "testimonials2": "url('/images/wave.jpeg')",
        "testimonials3": "url('/images/slider-testimonial-background.jpeg')"
      },
    },
    fontFamily: {
      serif:["Alegreya", "serif"],
      sans: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
