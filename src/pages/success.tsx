import {
  Flex, Heading, Text, 
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

interface SuccessProps{
  customerName: string;
  product:{
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <Flex
      flexDir='column'
      alignItems='center'
      justify='center'
      margin='0 auto'
      h='656px'
    >
      <Heading as='b' fontSize='2xl' color='gray.100'>Compra efetuada!</Heading>

      <Flex
        w='100%'
        maxW='130px'
        bg='green.200'
        mt='4rem'
        borderRadius={8}
        p='0.25rem'
        alignItems='center'
        justify='center'
        height={145}
      >
        <Image src={product.imageUrl} width={130} height={150} objectFit='cover' alt='' />
      </Flex>

      <Text
        color='gray.300'
        fontSize='xl'
        maxW='560px'
        textAlign='center'
        mt='2rem'
        lineHeight='1.4'
      >
        Uhuul <strong>{customerName},</strong> sua <strong>{product.name}</strong> já está a caminho da sua casa.
      </Text>

      <Link 
        href='/' 
        style={{
          marginTop: '5rem', 
          display: 'block', 
          color: '#00875f', 
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        Voltar ao catálogo
      </Link>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
