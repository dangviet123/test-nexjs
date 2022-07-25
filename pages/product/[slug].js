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
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VvZmZpY2UubWVyYXBncm91cC5jb20vZW9mZmljZS9hcGkvYXBpL2Vjb21tZXJjZS9hdXRoL3NpZ24taW4iLCJpYXQiOjE2NTQ2NTU0NzcsImV4cCI6MTk2NTY5NTQ3NywibmJmIjoxNjU0NjU1NDc3LCJqdGkiOiJKRUZCVU9mVjdLTGlrU05kIiwic3ViIjoiMjc2NSIsInBydiI6IjFkMGEwMjBhY2Y1YzRiNmM0OTc5ODlkZjFhYmYwZmJkNGU4YzhkNjMifQ.yUCbgk0eWLEALTz6jmjAnv7uAO_bLd9Qda6O6Hz7JYU'
    }});
    
    return {
      props: {
        data: datas.data.data
      }
    }
  }