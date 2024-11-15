import React, { Children } from 'react'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
       <header>
         <Header/>
       </header>
       <main>
        {children}
       </main>
    </>
  )
}

export default Layout