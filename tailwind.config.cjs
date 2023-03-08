module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '540px',
        'lg': '720px',
        'xl': '1000px',
        '2xl': '1300px',
        '3xl': '1500px'
      }
    }
  }
};