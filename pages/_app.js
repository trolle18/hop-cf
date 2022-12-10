import React, { useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import useLocalStorage from "use-local-storage";
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../scss/Main.scss'

function MyApp({ Component, pageProps }) {
  // const localStorage = useLocalStorage();

  // const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setIsAuth(true);
  //     localStorage.setItem("isAuth", true);
  //   } else {
  //     setIsAuth(false);
  //     localStorage.removeItem("isAuth");
  //   }
  // });

  return ( 
    <>
      {/* <Nav/> */}
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
