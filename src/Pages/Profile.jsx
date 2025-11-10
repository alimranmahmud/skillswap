import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../Provider/AuthProvider';
{motion}
const Profile = () => {
    const {user}= useContext(AuthContext);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <motion.img
          src={user?.photoURL}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-blue-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">{user?.displayName}</h2>
        <p className="text-gray-500">{user?.email}</p>

        <motion.div
          className="mt-6 bg-blue-50 p-4 rounded-xl text-gray-700"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="font-semibold text-lg mb-2">Bio</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus explicabo aliquid quod exercitationem laboriosam repellat enim ullam iste magnam praesentium?</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-600 transition"
        >
          Edit Profile
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Profile;
