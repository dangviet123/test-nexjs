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


export async function getStaticProps() {
  const datas = await axios.get('https://eoffice.merapgroup.com/eoffice/api/api/ecommerce/search-product?limit=1000', {headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VvZmZpY2UubWVyYXBncm91cC5jb20vZW9mZmljZS9hcGkvYXBpL2Vjb21tZXJjZS9hdXRoL2xvZ2luIiwiaWF0IjoxNjU1MTkyMjQ4LCJleHAiOjE2NTc4MjAyNDgsIm5iZiI6MTY1NTE5MjI0OCwianRpIjoieHpjT3Z2OGJhWTlNRWZINiIsInN1YiI6IjI3NTQiLCJwcnYiOiIxZDBhMDIwYWNmNWM0YjZjNDk3OTg5ZGYxYWJmMGZiZDRlOGM4ZDYzIn0.1F-6KZKyzg6UPRuOzvixCMSRIb9bpGiTBxHUnhmV3Ys'
  }});

  const metaKeyword = 'Dược phẩm, phân phối dược, Dược phẩm chức năng, Xisat, Osla';
  return {
    props: {
      metaKeyword,
      datas: datas.data.data
    }
  }
}
