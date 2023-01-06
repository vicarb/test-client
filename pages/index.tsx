import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { log } from 'console'
import { PropsWithChildren } from 'react'
import { loadProducts } from '../lib/load-products'

type MyProps = {
data:string

}

const inter = Inter({ subsets: ['latin'] })

export default function Home({dato}:any) {
  console.log("its",dato);
  
  return (
    <>
     <h1>Hello 2023 world!</h1>
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch('http://localhost:8000/api/hello')
  const res = await fetch('http://djangogunicorn:8000/api/products')
  
  const data = await res.json()
  // const data = await loadProducts()
  console.log(data);
  

  // Pass data to the page via props
  return { 
    props: {
       dato:data 
    },
}
  
}