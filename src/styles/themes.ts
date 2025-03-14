// src/styles/theme.ts
export const theme = {
    colors: {
      fantaOrange2: '#FEE011',
      fantaOrange1: '#FF701A',
      deepBlue: '#0065A1',
      creamyBeige: '#F5E1A4',
      mutedGreen: '#A1C6A1',
      darkBrown: '#794B31',
      white: '#FFFFFF',
      tealBlue: '#1E8B8D',
      electricYellow: '#F9E600',
      black: '#000000',
      fantaGrape: '#BF00FF',
    },
    fonts: {
      primary: 'Raleway, sans-serif',
    },
    // Optional: Add more reusable styles like spacing, breakpoints, etc.
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px',
    },
  };
  
  // TypeScript type for better autocompletion
  export type Theme = typeof theme;