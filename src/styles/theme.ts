import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#121214',
      800: '#202024',
      700: '#212121',
      600: '#383838',
      500: '#404040',
      400: 'rgba(186, 186, 186, 0.6)',
      300: '#c4c4cc',
      200: '#D9D9D9', 
      100: '#e1e1e6',
      50: '#FFFFFF', 
    },
    green: {
      500: '#00875f',
      300: '#00b37e',
      200: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  fontSizes: {
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
  styles: {
    global: {
      'html::-webkit-scrollbar': {
        bg: 'blackAlpha.300',
        w: '8px', 
        margin: 0,
        padding: 0,
        scrollBehavior: 'smooth',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'orange.700',
        borderRadius: '5px',
      },
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        '-webkit-font-smoothing': 'antialiased',
      },
    },
  },
});
