import React, { useEffect, useState } from 'react';

const OrderCard = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('cart'));
        if (saveList) {
            setOrder(saveList);
        }
    }, [])


const handleRemove=(id)=>{
    const existingList = JSON.parse(localStorage.getItem('cart'))
let updatedList = existingList.filter(p=>p.skillId !== id);
setOrder(updatedList);
localStorage.setItem('cart',JSON.stringify(updatedList))
}


    return (
        <div>
            <h1>Order List</h1>

            {
                order.map(or=><div className="card bg-base-100  shadow-sm">
             <div className='flex justify-center items-center shadow-2xl rounded-xl m-2'>
                   <figure>
                    <img className='w-25'
                        src={or.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{or.skillName}</h2>
                    <p>{or.price}</p>
                    <p>{or.providerName}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleRemove(or.skillId)} className="btn btn-primary">Remove</button>
                    </div>
                </div>
             </div>
            </div>)
            }
        </div>
    );
};

export default OrderCard;