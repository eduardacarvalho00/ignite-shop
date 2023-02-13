import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})


export default function Home() {
  return (
      <main className={roboto.className}>
        <h1>oie</h1>
      </main>
  )
}
