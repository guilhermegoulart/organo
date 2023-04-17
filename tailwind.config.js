/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      pantone: '#6278f7',
      white: '#ffffff',
      cinza: '#f2f2f2',
      veryperi: '#6667AB',
      lighgreen: '#D9F7E9',
      green: '#57C278',
      
      pmColor:'#57C278' ,
      secondColor:'#D9F7E9' ,

      pcColor2:'#82CFFA' ,
      secondColor2:'#E8F8FF',

      pmColor3:'#A6D157' ,
      secondColor3: '#F0F8E2',
      
      pmColor4:'#E06B69' ,
      secondColor4:'#FDE7E8' ,

      pmColor5:'#DB6EBF' ,
      secondColor5:'#FAE9F5',
      
      pmColor6:'#FFBA05' ,
      secondColor6:'#FFF5D9' ,
      
      pmColor7: '#FF8A29',
      secondColor7: '#FFEEDF',
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 30px rgba(0, 0, 0, 0.06)',
        '2': '8px 8px 16px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}

