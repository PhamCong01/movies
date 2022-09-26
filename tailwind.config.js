module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(50px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
    },
    
  },
  plugins: [],
};
