import React from 'react';
import { NavLink } from 'react-router';

const CategoryCard = ({ c_card }) => {
    return (
        <div>
            <NavLink to={`courses/${c_card.id}`}>            <h2 className='px-2 py-10 bg-amber-900 m-2 text-xl font-semibold text-center rounded-xl hover:bg-blue-950'>{c_card.categoryName}</h2>
            </NavLink>
        </div>
    );
};

export default CategoryCard;