

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountains': "url('/src/assets/mountains.png')",
        'planets': "url('/src/assets/planets.png')",
        'stars': "url('/src/assets/stars.png')",
        'custom-gradient': 'linear-gradient(45deg, hsl(240deg 100% 20%) 0%, hsl(275deg 100% 26%) 10%, hsl(310deg 100% 32%) 20%, hsl(345deg 100% 38%) 30%, hsl(20deg 100% 44%) 40%, hsl(55deg 100% 50%) 50%, hsl(44deg 98% 47%) 60%, hsl(33deg 95% 44%) 70%, hsl(22deg 91% 41%) 80%, hsl(11deg 89% 38%) 90%, hsl(0deg 86% 36%) 100%)',
        'three-color-gradient': 'linear-gradient(45deg, #dc2626 0%, #4f46e5 50%, #16a34a 100%)',
      },
     backgroundColor:{
      'three-gradient': 'linear-gradient(45deg, #dc2626 0%, #4f46e5 50%, #16a34a 100%)'
     },
      fontFamily:{
        'Brush':['Brush']
      },
      animation:{
        blob:'blob 5s ease infinite'
      },
      keyframes: {
        blob:{
          '0%':{
            transform:'scale(1)'
          },
         
          '66%':{
            transform:'scale(0.9)'
          },
          '100%':{
            transform:'scale(1)'
          },
        }
      }, transitionDelay: {
        '0': '0ms',
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      boxShadow: {
        'frosted': '0 4px 6px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.06)'
      },
    
    },
  },
  plugins: [],
}
