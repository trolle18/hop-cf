import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
// import SearchField from './SearchField';

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [sectionData, setSectionData] = useState([]);

  // Hide navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { setShow(true) } // if scroll up show the navbar
      setLastScrollY(window.scrollY); // remember current page location to use in the next move
    }
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

  const [sectionData, setSectionData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
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
          <div key={data.id} className="nav-cntr">
            <div className="nav-inner-cntr">

              <div className="nav-mob-links">                 
                <BurgerMenu data={data}/>               
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
