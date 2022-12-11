import React, { useState } from "react";
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PageHead from "../components/PageHead";
import '../scss/Main.scss'

function MyApp({ Component, pageProps }) {

  return ( 
    <>
     <PageHead/>
      <Nav/>
      {/* <Nav/> */}
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
