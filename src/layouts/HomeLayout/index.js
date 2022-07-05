import React from 'react'
import Footer from './Footer'
import Header from './Header'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Header />
        <div style={{minHeight: 'calc(100vh - 110px)', maxWidth: 1400, margin: 'auto'}}>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default HomeLayout;
