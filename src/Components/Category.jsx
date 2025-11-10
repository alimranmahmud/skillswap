import React, { use } from 'react';
import CategoryCard from './CategoryCard';

const categoryPromise = fetch("/category.json").then((res) => res.json());


const Category = () => {


    const category = use(categoryPromise);
    // console.log(category, "hello")


    return (
        <div>
            <h2 className='text-2xl font-bold mb-4 mt-10'>Categories</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                {
                    category.map(c_card => <CategoryCard c_card={c_card}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;