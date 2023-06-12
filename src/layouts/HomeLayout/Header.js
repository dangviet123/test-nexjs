import { styled } from '@mui/material/styles';
import React from 'react';
import { useRouter } from 'next/router';

const StyleHeader = styled('div')(({ theme }) => ({
  height: 60,
  background: theme.palette.primary.main,
  '.main-header': {
    maxWidth: 1400,
    height: 60,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    '.title': {
      fontWeight: 600,
      color: 'white',
      cursor: 'pointer'
    },
    '.cart': {
      cursor: 'pointer',
      fontWeight: 600,
      color: 'white',
    }
  }
}));



export default function Header () {
  const router = useRouter();
  return (
    <StyleHeader>
      <div className='main-header'>
        <div className='title' onClick={() => router.push('/')}>CÔNG TY CỔ PHẦN DƯỢC PHA NAM 1</div>
        <div style={{flexGrow: 1}} />
        <div className='cart' onClick={() => router.push('/carts')}>Giỏ hàng</div>
      </div>
    </StyleHeader>
  )
}
