import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <img src="../../../public/assets/android-chrome-192x192.png" alt='ana-catarina-logo' className='navbar__image'></img>
                <input type="seacrh" placeholder='Search or the product...' className='navbar__input'></input>
                <AiOutlineShopping className='navbar__cartIcon' />
            </nav>
        </header>
    )
}

export default Navbar