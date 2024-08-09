/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        cursiva:["Dancing Script",'sans-serif'],
        flower:["Indie Flower","sans-serif"]
      },
      backgroundImage:{
        'imagen': "url('https://res.cloudinary.com/damoqjwmk/image/upload/v1719510409/ulbakuya/fondo.avif')"
      },
      screens:{
        'xs':'320px',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}

