// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       clipPath: {
//         'custom': 'polygon(0 0, 100% 0, 100% 98%, 75% 95%, 0 100%)',
//         'custom-2': 'polygon(0 0, 100% 0, 100% 98%, 25% 95%, 0 100%)',
//         'custom-3': 'polygon(0 0, 100% 0, 100% 98%, 75% 96%, 0 100%)',
//       },
//       keyframes: {
//         blob: {
//           '0%': { transform: 'scale(1)' },
//           '33%': { transform: 'scale(1.2)' },
//           '66%': { transform: 'scale(0.8)' },
//           '100%': { transform: 'scale(1)' },
//         },
//       },
//       animation: {
//         blob: 'blob 10s infinite',
//       },
//       backgroundImage: {
//         'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
}
