import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import { toast } from 'react-toastify';

const CardDetails = () => {
    const { id } = useParams();

    const categoryData = useLoaderData();

    const singleData = categoryData.find(single => single.skillId === parseInt(id));

    const {  description, image, skillName } = singleData;
    // console.log(singleData)

    const handleLocalStorage = () => {
        

        const existingList = JSON.parse(localStorage.getItem('cart'));
        let updatedList = [];

        if (existingList) {
            const isDuplicate = existingList.some(p => p.skillId === singleData.skillId);
            if (isDuplicate) {
                return toast("already added");
            }
            updatedList = [...existingList, singleData];
        } else {
            updatedList.push(singleData)
        }

        localStorage.setItem('cart', JSON.stringify(updatedList));
        toast.success("added your courses.")
    }


    return (
       <div>
        <Navbar></Navbar>
         <div className=" mt-20 card bg-base-100 mx-auto w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{skillName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleLocalStorage} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default CardDetails;