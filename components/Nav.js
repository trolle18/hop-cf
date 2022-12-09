import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
// import SearchField from './SearchField';

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sectionData, setSectionData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // Hide navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { setShow(true) } // if scroll up show the navbar
      setLastScrollY(window.scrollY); // remember current page location to use in the next move
    }
      // const y = window.getElementById("dropdown");
      // if (y.classList.contains("show")) {
      //   setShow(true); 
      // } 
      // else { setShow(false) }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => { // cleanup function
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  // Open burger menu
  const openMenu = () => {
    const button = document.getElementById("menu-btn");
    const y = document.getElementById("dropdown");
    const x = document.getElementById("nav");
    button.classList.toggle("change");

    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");    
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
      x.classList.add("show");
      x.classList.remove("false");
    }
  }

  // Fetch data
  useEffect(() => {
    setLoading(true)
    fetch('/api/nav')
      .then((res) => res.json())
      .then((sectionData) => {
        setSectionData(sectionData)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!sectionData) return <p>No data</p>


  return (
    <>
      <nav className={`active ${show && ''}`} id="nav">
        {sectionData.data.map((data) => (

          <div key={data.id} className="nav-cntr" id="nav-overflow">
            <div className="nav-inner-cntr">

              <div className="nav-mob-links">                 
                {/* <BurgerMenu data={data}/> */}
                <button onClick={openMenu} className="nav-mob-links__menu-btn" id="menu-btn">
                  <svg viewBox="0 0 10 8"><path d="M1 1h8M1 4h 8M1 7h8"/></svg>
                </button>
                <div className="nav-mob-links__dropdown hidden" id="dropdown">
                  {data?.navLinks.map((navLink) => (
                    <div  key={navLink.id} className="nav-mob-links__dropdown__link">
                      <a key={navLink.id} href={navLink.link}>
                        <span>{navLink.linkTxt}</span>              
                      </a>
                    </div>          
                  ))} 
                </div>
              </div>   

              <div className="nav-inner-cntr__links">
                {data?.navLinks.map((navLink) => (
                  <a key={navLink.id} href={navLink.url}>
                    {navLink.linkTxt}
                  </a>
                ))}    
                  {/* <SearchField/> */}
              </div>

              <div className="nav-inner-cntr__logo"> 
                {data?.logoLink.map((logoLink) => (
                  <a key={logoLink.id} href={logoLink.url}>
                    <div className="logo-svg"></div>
                  </a>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </nav>
    </>       
  );
};

export default Nav;
