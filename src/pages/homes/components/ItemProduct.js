import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';



const StyleProduct = styled('div')(({ theme }) => ({
    padding: 20,
    borderRadius: 10,
    border: '1px solid #9e9e9e47',
    width: 'calc(20% - 40px)',
    marginRight: 20,
    marginBottom: 20,
    cursor: 'pointer',
    textAlign: 'center',
    '.product-name': {
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 600
    }
}));
export default function ItemProduct({
    image,
    productName,
    slug
}) {
    const router = useRouter();
    return (
        <StyleProduct>
            <Link href="/product/[slug]" as={`/product/${slug}`}>
                <div className='root-product'>
                    <Image   
                        alt="Vercel logo" src={image}
                        width={180}
                        height={180}
                    />
                    <div className='product-name'>{productName}</div>
                    <Button>Xem chi tiết</Button>
                </div>
            </Link>
            
        </StyleProduct>
    )
}
