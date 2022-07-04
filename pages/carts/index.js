import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Carts() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }
    return (
        <div>
            <Head>
                <title>Gỏ hàng của bạn</title>
                <meta name="description" content="Công ty cổ phần dược PHA NAM" />
                <meta name="keywords" content="Giỏ hàng" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>CART PAGE</h1>

                <button onClick={handleClick} >Về trang chủ</button>
            </div>
        </div>
    )
}
