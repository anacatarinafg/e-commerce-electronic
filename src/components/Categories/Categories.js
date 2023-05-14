import React from 'react';
import './categories.css';

const Categories = ({ id, title, onCategoryClick }) => {
    return (
        <section>
            <div key={id} className='categories__menu' onClick={onCategoryClick}>{title}</div>
        </section>
    )
}

export default Categories