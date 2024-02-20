import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

        // export async function getStaticProps() {
        //     const res = await fetch(`http://localhost:7777/products`)
        //     const repo = await res.json()
        //     return { props: { repo } }
        // }
        // export async function getServerSideProps() {
        //     const res = await fetch('http://localhost:7777/products')
        //     const repo = await res.json()
        //     return { props: { repo } }
        //   }



        // export async function getServerSideProps() {
        //   const {repo} = await axios 
        //   .get("http://localhost:7777/products")
        //   return { props: {repo} }
        // }


        export async function getServerSideProps() {
          const { data } = await axios
          .get(
            `http://localhost:7777/products`
          );
          return { props: { data } };
        }

        // export async function getServerSideProps() {
        //     const res = await fetch('https://api.github.com/repos/vercel/next.js')
        //     const repo = await res.json()
        //     return { props: { repo } }
        //   }

const Products = ({data}) => {
    const router = useRouter()
    const findMod = data.find((el) => {
        return el?.id == router.query.id
    })

  return (
    <>
        <Head>
                <title>ProductId: {router.query.id}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
        </Head> 
        <div className="products">
            <div className="case">
            <div className="item">
                <div className="pleft">
                    <img src={findMod?.img} alt="" />
                </div>
                <div className="pright">
                        <h1>{findMod?.userId}</h1><br />
                        <p>{findMod?.title}</p><br />
                        <b>{findMod?.price} so'm</b><br /><br />
                        <button>В корзину</button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Products