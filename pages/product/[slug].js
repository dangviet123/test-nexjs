import React from 'react';
import axios from "axios";
import Head from 'next/head';
import ProductDetail from '../../src/pages/product';

export default function Product({
    data
}) {

  return (
    <React.Fragment>
        <Head>
        <title>{data.product_name}</title>
        <meta name="description" content={data.uses} />
        <meta name="keywords" content={data.product_name}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductDetail data={data} />
    </React.Fragment>
  )
}


export async function getServerSideProps(context) {
    const slug = context.params.slug;
    const datas = await axios.get(`https://eoffice.merapgroup.com/eoffice/api/api/ecommerce/product-detail?slug=${slug}`, {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VvZmZpY2UubWVyYXBncm91cC5jb20vZW9mZmljZS9hcGkvYXBpL2Vjb21tZXJjZS9hdXRoL2xvZ2luIiwiaWF0IjoxNjU1MTkyMjQ4LCJleHAiOjE2NTc4MjAyNDgsIm5iZiI6MTY1NTE5MjI0OCwianRpIjoieHpjT3Z2OGJhWTlNRWZINiIsInN1YiI6IjI3NTQiLCJwcnYiOiIxZDBhMDIwYWNmNWM0YjZjNDk3OTg5ZGYxYWJmMGZiZDRlOGM4ZDYzIn0.1F-6KZKyzg6UPRuOzvixCMSRIb9bpGiTBxHUnhmV3Ys'
    }});
    
    return {
      props: {
        data: datas.data.data
      }
    }
  }