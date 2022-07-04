import React from 'react'
import Footer from './Footer'
import Header from './Header'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default HomeLayout;
