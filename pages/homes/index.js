import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HomeLayout from '../../src/layouts/HomeLayout';
import Button from '@mui/material/Button';
const HomePage = () => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/carts');
    }
    return (
        <div>
          <Head>
            <title>Merap Holding</title>
            <meta name="description" content="Công ty cổ phần dược PHA NAM" />
            <meta name="keywords" content="Balo công sở, đi làm, đựng laptop, máy tính 13 inch, 14 inch, 15.6 inch, chống sốc dành cho người đi làm, sinh viên, học sinh cao cấp"/>
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <HomeLayout>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h1>HOME PAGE</h1>
                    <Button  onClick={handleClick} variant="contained">CHUYỂN HƯỚNG</Button>
                </div>
            </HomeLayout>
            
        </div>
      )
}

export default HomePage;
