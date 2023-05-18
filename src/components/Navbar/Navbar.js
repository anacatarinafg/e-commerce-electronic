import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <Link to='/'><img src="../../../public/assets/android-chrome-192x192.png" alt='ana-catarina-logo' className='navbar__image'></img></Link>
                <input type="seacrh" placeholder='Search or the product...' className='navbar__input'></input>
                <Link to="/Cart"><AiOutlineShopping className='navbar__cartIcon' /></Link>
            </nav>
        </header>
    )
}

export default Navbar