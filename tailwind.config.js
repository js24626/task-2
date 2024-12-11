module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure this is present for React files
  ],
  theme: {
    extend: {
      animation: {
        'up-down': 'up-down 2s ease-in-out infinite alternate-reverse both',
      },
      keyframes: {
        'up-down': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-18px)',
          },
        },
      },
      colors: {
        'custom-blue': '#00a6eb',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
       
      },
    },
  },
  plugins: [],
}