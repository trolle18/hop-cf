/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';

export default function NavBurgerMenu({data}) {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // Open burger menu
  const openMenu = () => {
    const button = document.getElementById("menu-btn");
    const y = document.getElementById("dropdown");
    const n = document.getElementById("nav");
    button.classList.toggle("change");
    
    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");
      n.classList.add("show")
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
      n.classList.remove("show")
    }
  }

  return (
    <>
      <button onClick={openMenu} className="nav-mob-links__menu-btn" id="menu-btn">
      <div className="menu-btn-inner-cntr">
      <span className="menu-icon"></span>
         {/* <svg viewBox="0 0 10 8" strokeWidth="1em" height="100%" width="1em" fill="#fff" strokeLinecap="square" stroke="#fff"><path d="M1 1h8M1 4h 8M1 7h8"/></svg> */}
        <span className="menu-text"></span>
      </div>
       
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
    </>
  );
};
