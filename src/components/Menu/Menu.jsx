import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Menu.css";

function Menu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="hamburger">
        <Hamburger className="ham__icon" toggled={open} toggle={setOpen} />
      </div>

      {open && (
        <div className="ham__menu--open">
          <div className="ham__close">
            <Hamburger className="ham__icon" toggled={open} toggle={setOpen} />
          </div>
          <ul className="ham__list">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/search")}>Search</li>
            <li className="contact"> Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;

{
  /* <div className='fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center z-50'>
          <header className='fixed flex items-center justify-end'>
          </header>
          <main className='flex items-center justify-center h-screen text-4xl text-center'>
          this is a centered window
          </main>
        </div> */
}
