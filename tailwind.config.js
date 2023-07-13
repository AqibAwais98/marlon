/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Devanagari: ["Anek Devanagari", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('../src/assets/img/hero-bg-image.png')",
        promise: "url('../src/assets/img/bg-image2.png')",
        feature: "url('../src/assets/img/feature_bg_image.png')",
        circles: "url('../src/assets/img/circles.png')",
        contact: "url('../src/assets/img/contact_image.png')",
      },
      backgroundPosition:{
        'right-center': 'right center',
      }
    },
  },
  plugins: [],
};
