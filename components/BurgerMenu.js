/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function BurgerMenu({data}) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide drop down on scroll
  // const controlShow = () => {
  //   if (typeof window !== 'undefined') { 
  //     if (window.scrollY > lastScrollY) { // if scroll down hide
  //       setShow(false); 
  //     } else { setShow(true) } // if scroll up show 
  //     setLastScrollY(window.scrollY); // remember current page location to use in the next move
  //   }
  // };
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlShow);
  //     return () => { // cleanup function
  //       window.removeEventListener('scroll', controlShow);
  //     };
  //   }
  // }, [lastScrollY]);


  // Open burger menu
  const openMenu = () => {
    const button = document.getElementById("menu-btn");
    const y = document.getElementById("dropdown");
    button.classList.toggle("change");
    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
    }
  }

  return (
    <>
      <button onClick={openMenu} className="nav-mob-links__menu-btn" id="menu-btn">
        <svg viewBox="0 0 10 8"><path d="M1 1h8M1 4h 8M1 7h8"/></svg>
      </button>

      <div className={`nav-mob-links__dropdown hidden ${show && ""}`} id="dropdown">
        {data?.navLinks.map((navLink) => (
          <div  key={navLink.id} className="nav-mob-links__dropdown__link">
            <a key={navLink.id} href={navLink.link}>
              <span>{navLink.linkTxt}</span>              
            </a>
          </div>          
        ))} 
      </div>
    </>
  );
};
