import React from 'react'
import HomeLayout from '../../layouts/HomeLayout';
import { Divider, Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';

const StyleDetail = styled('div')(({ theme }) => ({
    marginTop: 30
}));

export default function ProductDetail({
    data
}) {
    return (
        <HomeLayout>
            <StyleDetail>
                <Grid container spacing={2}>
                    <Grid item xs={6} style={{textAlign: 'center'}}>
                        <Image   
                            alt="Vercel logo" src={`https://eoffice.merapgroup.com/eoffice/api/storage/images/products/thumb/${data.product_image}`}
                            width={300}
                            height={300}
                
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography >{data.product_name}</Typography>
                        <Typography ><b>Quy cách:</b> {data.packing}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <b>MÔ TẢ</b>
                        <Divider />
                    </Grid>
                </Grid>
            </StyleDetail>
        </HomeLayout>
    )
}
