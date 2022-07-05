import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import ItemProduct from './components/ItemProduct';
import { styled } from '@mui/material';



const ListProduct = styled('div')(({ theme }) => ({
    marginTop: 20,
    display: 'flex',

    justifyContent: 'left',
    flexWrap: 'wrap'
}));



export default function HomePage ({
    datas
}) {
    return (
        <div>
            <HomeLayout>
                <ListProduct>
                    {datas.map((product, index) => {
                        return (
                            <ItemProduct
                                key={index}
                                image={`https://eoffice.merapgroup.com/eoffice/api/storage/images/products/thumb/${product.product_image}`}
                                productName={product.product_name}
                                slug={product.slug}
                            />
                        )
                    }) }
                </ListProduct>
                
            </HomeLayout>
            
        </div>
      )
}




