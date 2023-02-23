/* eslint-disable no-alert */
import {
  Heading, Text, Button, Grid, GridItem, Center, Spinner, 
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import Stripe from 'stripe';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import { stripe } from '@/lib/stripe';

interface ProductProps{
  product :{
    id: string;
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string
  }
}

export default function Product({ product } : ProductProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  if (isFallback) {
    return (
      <Center h='90vh'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.300'
          color='green.300'
          size='xl'
        />
      </Center>
    );
  }

  async function HandleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl; // página fora da aplicação
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!');
    }
  }
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={5} maxW='1380px' margin='0 auto'>
      <GridItem
        display='flex'
        width='100%'
        maxW='576px'
        h='656px'
        bg='green.200'
        borderRadius={8}
        p='0.25rem'
        alignItems='center'
        justifyContent='center'
      >
        <Image src={product.imageUrl} objectFit='cover' width={520} height={480} alt=''/>
      </GridItem>

      <GridItem 
        display='flex'
        flexDir='column'
      >
        <Heading as='b' fontSize='2xl' color='gray.300'>{product.name}</Heading>
        <Text
          fontSize='2xl'
          color='green.300'
          mt='1rem'
          display='block'
        >
          {product.price}
        </Text>

        <Text
          mt='2.5rem'
          fontSize='md'
          lineHeight={1.6}
          color='gray.300'
        >
          {product.description}
        </Text>

        <Button
          w='100%'
          h='70px'
          colorScheme='green'
          mt='auto'
          disabled={isCreatingCheckoutSession}
          onClick={() => HandleBuyProduct()}
          _disabled={{
            opacity: 0.6,
            cursor: 'not-allowed',
          }}
        >
            Comprar agora
        </Button>
      </GridItem>
    </Grid>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { id: 'prod_NMsKdDdHmDY0HL' } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, {id : string}> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true, 
    };
  }
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });
  
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
