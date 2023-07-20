module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Inter-Regular': ['Inter-Regular', 'sans-serif'],   
      'Inter-Bold': ['Inter-Bold', 'sans-serif'], 
      'Inter-ExtraBold': ['Inter-ExtraBold', 'sans-serif'],
      'Inter-Thin': ['Inter-Thin','sans-serif'],      
    },
    extend: {  
      gap: {
        '30': '1.9rem',
      },
      width: {
        '90': '90%',
        '49': '49%',
      },
      lineHeight: {
        '12': '4.57rem',
      },
      dropShadow: {
        '3xl': '0 0 100px rgba(66,184,131,.5)',
      },
      margin: {
        '140': '140px',
      },        
      colors: {
        'cerulean':'#0ebbd280',
        'errie-black':'#1a1a1a',
        'brilliant-rose': '#f863bd',
        'cornflower-blue': '#5981f7',
        'light-gray': '#E8E6E6',
        'dark': '#1A1A1A',
        'primary':'#42b883',
        'secondary': '#f863bd',
        'might-green':'#0ebbd2',
        'light-black': '#252529',
        'body-gray': '#979fad',
        'dodger-blue':'#4785fe',
        'spring-green': '#02FAAF'
      },
      variants:{
        scale: ['hover', 'focus', 'group-hover'],
        rotate: ['hover', 'focus', 'group-hover'],
      }
    },
  },
  plugins: [],
}
