import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchTerm) {
                navigate("/search?s=" + searchTerm);
            }
        }, 250);

        return () => clearTimeout(delay);
    }, [searchTerm, navigate]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <header>
            <nav className='navbar'>
                <Link to='/'><img src="../../../public/assets/android-chrome-192x192.png" alt='ana-catarina-logo' className='navbar__image'></img></Link>
                <input type="seacrh" placeholder='Search or the product...' name="search" className='navbar__input' onChange={handleChange}></input>
                <Link to="/Cart"><AiOutlineShopping className='navbar__cartIcon' /></Link>
            </nav>
        </header>
    )
}

export default Navbar