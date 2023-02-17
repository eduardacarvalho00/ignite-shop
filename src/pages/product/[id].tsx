import {
  Heading, Text, Button, Grid, GridItem, 
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { stripe } from '@/lib/stripe';

export default function Product() {
  const { query } = useRouter();

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
        <Image src='' objectFit='cover'/>
        <p>a</p>
      </GridItem>

      <GridItem 
        display='flex'
        flexDir='column'
      >
        <Heading as='b' fontSize='2xl' color='gray.300'>Camiseta X</Heading>
        <Text
          fontSize='2xl'
          color='green.300'
          mt='1rem'
          display='block'
        >
          R$ 79,90
        </Text>

        <Text
          mt='2.5rem'
          fontSize='md'
          lineHeight={1.6}
          color='gray.300'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore porro temporibus asperiores, assumenda ad, incidunt qui vero, repellendus in ullam beatae iste eos laborum eaque accusantium odit maiores vel.
        </Text>

        <Button w='100%' h='70px' colorScheme='green' mt='auto'>Comprar agora</Button>
      </GridItem>
    </Grid>
  );
}

export const getStaticProps: GetStaticProps<any, {id : string}> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
