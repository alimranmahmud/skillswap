import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
{ motion }

const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext);

const navigate = useNavigate()


    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        createUser(email, password)
            .then((result) => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                    navigate('/')
                    })

                    .catch(error => {
                        // console.log(error)
                        setUser(user)
                    })
            }).catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            })




    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
            >
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
                    Create an Account 🚀
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join SkillSwap and start learning today
                </p>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 border-black text-black py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Photo Url
                        </label>
                        <input
                            type="text"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Photo URL"
                            className="w-full px-4 border-black text-black py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        //   required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border-black text-black border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            required
                        />
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                        <input type="checkbox" className="mr-2" required />
                        I agree to the{" "}
                        <a href="#" className="text-indigo-600 hover:underline ml-1">
                            Terms & Conditions
                        </a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Register
                    </motion.button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to='/login' className="text-indigo-600 hover:underline font-medium">
                        Login here
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Register;
