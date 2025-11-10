
import { motion } from 'framer-motion';
{motion}
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const CourseCard = ({ datas }) => {

  
    const handleButtonClick = () => {
        // .log("clicked");
    }


    const { skillId, description, image, price, rating, skillName } = datas
    return (
     
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
        >
            <div className="max-w-sm mx-auto
              rounded-2xl 
               overflow-hidden
                transform transition duration-300
                 hover:scale-105 hover:shadow-2xl
                  cursor-pointer card bg-base-100
                   w-96  shadow-sm space-y-3.5">
                <figure className='h-48 overflow-hidden'>
                    <img className='w-full object-cover'
                        src={image}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {skillName
                        }
                        <div className="badge badge-secondary"><FaStar size={20} color='yellow' />{rating}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end mt-3">
                        <div className="badge py-4 badge-outline font-bold hover:text-black hover:bg-white">$ {price}</div>
                        <NavLink to={`/card_details/${skillId}`} className="badge py-4 badge-outline font-bold hover:text-black hover:bg-white" onClick={handleButtonClick}>View Details</NavLink>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default CourseCard;