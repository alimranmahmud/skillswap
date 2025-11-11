import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

{ motion }

const Login = () => {

    const [error, setError] = useState("");

    const location = useLocation()
    const navigate = useNavigate()

    const { signIn, googleSignIn } = use(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        signIn(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                alert(error.message);
                setError(error.code)
            })

    };

    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {

                const user = result.user;
                // console.log(user)
                navigate('/');

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
            });
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
            >
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Login to your SkillSwap account
                </p>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-black"
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
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-black"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <a href="#" className="text-indigo-600 hover:underline">
                            Forgot Password?
                        </a>
                        <Link to='/registration'
                            className="text-gray-500 hover:text-indigo-600">
                            Create Account
                        </Link>
                    </div>

                    {
                        error && <p className="text-red-400 text-xs">{error}</p>
                    }

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Login
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full hover:bg-white hover:text-black py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md  transition"
                    >
                        <span onClick={handleGoogle} className="flex justify-center items-center gap-3">
                            <FaGoogle></FaGoogle>  Sign in with Google
                        </span>
                    </motion.button>
                </form>

                <div className="mt-6 text-center text-gray-500 text-sm">
                    By logging in, you agree to our{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        Terms & Conditions
                    </a>
                </div>
            </motion.div>

        </section>
    );

  
};

export default Login;
