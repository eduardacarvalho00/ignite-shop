import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import camiseta1 from '../assets/camiseta1.png';
import 'swiper/css';

export default function Home() {
  return (
    <Flex 
      as='main'
      gap='3rem'
      w='100%' 
      maxWidth='calc(100vw - ((100vw - 1180px) /2))' 
      minHeight='656px'
      marginLeft='auto'
    >
      <Swiper 
        spaceBetween={30}
        slidesPerView={2.5}
      >
        <SwiperSlide>
          <Box 
            bg='green.200'
            borderRadius='8' 
            h='100%'
          >
            <Flex as='a' href='#' justifyContent='center'>
              <Image src={camiseta1} width={520} height={480} alt='' objectFit='cover'/>

              <Flex
                alignItems='center'
                justifyContent='space-between'
                position='absolute'
                bottom='0.25rem'
                left='0.25rem'
                right='0.25rem'
                p='2rem'
                borderRadius={6}
                bg='rgba(0, 0, 0, 0.6)'
              >
                <Text as='b' fontSize='lg'>Camiseta Y</Text>
                <Text as='b' fontSize='xl' color='green.300'>R$ 80,00</Text>
              </Flex>

            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box 
            bg='green.200'
            borderRadius='8' 
            h='100%'
          >
            <Flex as='a' href='#' justifyContent='center'>
              <Image src={camiseta1} width={520} height={480} alt='' objectFit='cover'/>

              <Flex
                alignItems='center'
                justifyContent='space-between'
                position='absolute'
                bottom='0.25rem'
                left='0.25rem'
                right='0.25rem'
                p='2rem'
                borderRadius={6}
                bg='rgba(0, 0, 0, 0.6)'
              >
                <Text as='b' fontSize='lg'>Camiseta Y</Text>
                <Text as='b' fontSize='xl' color='green.300'>R$ 80,00</Text>
              </Flex>

            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box 
            bg='green.200'
            borderRadius='8' 
            h='100%'
          >
            <Flex as='a' href='#' justifyContent='center'>
              <Image src={camiseta1} width={520} height={480} alt='' objectFit='cover'/>

              <Flex
                alignItems='center'
                justifyContent='space-between'
                position='absolute'
                bottom='0.25rem'
                left='0.25rem'
                right='0.25rem'
                p='2rem'
                borderRadius={6}
                bg='rgba(0, 0, 0, 0.6)'
              >
                <Text as='b' fontSize='lg'>Camiseta Y</Text>
                <Text as='b' fontSize='xl' color='green.300'>R$ 80,00</Text>
              </Flex>

            </Flex>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box 
            bg='green.200'
            borderRadius='8' 
            h='100%'
          >
            <Flex as='a' href='#' justifyContent='center'>
              <Image src={camiseta1} width={520} height={480} alt='' objectFit='cover'/>

              <Flex
                alignItems='center'
                justifyContent='space-between'
                position='absolute'
                bottom='0.25rem'
                left='0.25rem'
                right='0.25rem'
                p='2rem'
                borderRadius={6}
                bg='rgba(0, 0, 0, 0.6)'
              >
                <Text as='b' fontSize='lg'>Camiseta Y</Text>
                <Text as='b' fontSize='xl' color='green.300'>R$ 80,00</Text>
              </Flex>

            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
          
    </Flex>
  );
}
