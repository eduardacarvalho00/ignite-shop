import { GetStaticProps } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import 'swiper/css';

interface HomeProps{
  products: {
    id: string;
    name: string,
    imageUrl: string,
    price: string,
  }[]
}

export default function Home({ products } : HomeProps) {
  return (
    <Flex 
      as='main'
      gap='3rem'
      w='100%' 
      maxWidth='calc(100vw - ((100vw - 1480px) /2))' 
      minHeight='656px'
      marginLeft='auto'
    >
      <Swiper 
        spaceBetween={30}
        slidesPerView={2.5}
      >
        {products.map((product) => (
          <SwiperSlide id={product.id}>
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Box 
                bg='green.200'
                borderRadius='8' 
                h='100%'
              >
                <Flex justifyContent='center'>
                  <Image src={product.imageUrl} width={520} height={480} alt='' objectFit='cover'/>

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
                    <Text as='b' fontSize='lg'>{product.name}</Text>
                    <Text as='b' fontSize='xl' color='green.300'>{product.price}</Text>
                  </Flex>

                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
       
      </Swiper>
          
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    };
  });
  
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2hours
  };
};
