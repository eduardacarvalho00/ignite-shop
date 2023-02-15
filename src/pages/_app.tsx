import { ChakraProvider, Box } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Image from 'next/legacy/image';
import { theme } from '@/styles/theme';
import logo from '../assets/logo.png';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
        minHeight='100vh'
      >
        <Box as='header' p='2rem 0' w='100%' maxW='1180' margin='0 auto'>
         
          <Image src={logo.src} width="130" height="52"/>
        </Box>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
