import React from 'react';
import Head from 'next/head';
import HomePage from '../src/pages/homes';
import axios from "axios";
export default function Home({metaKeyword, datas}) {
  
  return (
    <React.Fragment>
      <Head>
        <title>Công Ty Cổ Phần Dược Pha Nam</title>
        <meta name="description" content="Với định hướng trở thành Công Ty phân phối dược phẩm trong nước số 1 Việt Nam, Công Ty Cổ Phần Dược Pha Nam không ngừng phát triển hệ thống rộng khắp cả nước và luôn hướng tới việc đáp ứng trên mức mong đợi của khách hàng bằng dịch vụ nhanh nhất và độc đáo" />
        <meta name="keywords" content={metaKeyword}/>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <HomePage datas={datas} />
    </React.Fragment>
  );
}


export async function getServerSideProps(context) {
  const datas = await axios.get('https://eoffice.merapgroup.com/eoffice/api/api/ecommerce/search-product?limit=1000', {headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VvZmZpY2UubWVyYXBncm91cC5jb20vZW9mZmljZS9hcGkvYXBpL2Vjb21tZXJjZS9hdXRoL3NpZ24taW4iLCJpYXQiOjE2NTQ2NTU0NzcsImV4cCI6MTk2NTY5NTQ3NywibmJmIjoxNjU0NjU1NDc3LCJqdGkiOiJKRUZCVU9mVjdLTGlrU05kIiwic3ViIjoiMjc2NSIsInBydiI6IjFkMGEwMjBhY2Y1YzRiNmM0OTc5ODlkZjFhYmYwZmJkNGU4YzhkNjMifQ.yUCbgk0eWLEALTz6jmjAnv7uAO_bLd9Qda6O6Hz7JYU'
  }});

  const metaKeyword = 'Dược phẩm, phân phối dược, Dược phẩm chức năng, Xisat, Osla';
  return {
    props: {
      metaKeyword,
      datas: datas.data.data
    }
  }
}
