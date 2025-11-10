import React from 'react';
import { motion } from 'framer-motion';
{ motion }

export default function About() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid gap-10 lg:grid-cols-2 items-center"
            >

                <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        About SkillSwap
                    </h2>

                    <p className="text-white leading-relaxed mb-6">
                        SkillSwap helps learners and creators connect — share knowledge, build
                        real skills, and grow together. We offer short, hands-on lessons across
                        music, programming, design, and cooking — all delivered by experienced
                        instructors and crafted for practical learning.
                    </p>


                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                        {[
                            {
                                color: "indigo",
                                title: "Practical lessons",
                                desc: "Short, project-focused sessions.",
                            },
                            {
                                color: "rose",
                                title: "Top instructors",
                                desc: "Experienced mentors from industry.",
                            },
                            {
                                color: "green",
                                title: "Flexible schedule",
                                desc: "Learn at your own pace.",
                            },
                            {
                                color: "yellow",
                                title: "Community support",
                                desc: "Collaborate and get feedback.",
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex gap-3 items-start">
                                <span
                                    className={`inline-flex items-center justify-center w-9 h-9 rounded-md bg-${item.color}-50 text-${item.color}-600 font-semibold`}
                                >
                                    ✓
                                </span>
                                <div>
                                    <div className="font-medium text-white">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-3">
                        <a
                            href="#courses"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 transition"
                        >
                            Browse Courses
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>


                <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="bg-gradient-to-tr from-white to-indigo-50 rounded-2xl p-6 shadow-lg"
                >
                    <img
                        src="images.jpeg"
                        alt="About Illustration"
                        className="w-full rounded-lg mb-6 object-cover h-44 sm:h-56"
                    />

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-gray-900">50+</div>
                            <div className="text-xs text-gray-500">Instructors</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">1000+</div>
                            <div className="text-xs text-gray-500">Students</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">200+</div>
                            <div className="text-xs text-gray-500">Courses</div>
                        </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        "Learn, Tech, and Grow with SkillSwap" — short practical lessons to
                        level up your skills.
                    </div>
                </motion.div>
            </motion.div>


            <div className="mt-16 grid gap-8 sm:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-xl shadow"
                >
                    <h3 className="text-xl font-semibold mb-3 text-blue-500">Our Mission</h3>
                    <p className="text-gray-600">
                        To make high-quality, practical learning affordable and accessible to
                        everyone — empowering people to create and share knowledge worldwide.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 }}
                    className="bg-white p-6 rounded-xl shadow"
                >
                    <h3 className="text-xl text-blue-500 font-semibold mb-3 ">Meet the Team</h3>
                    <div className="flex gap-3 items-center">
                        <img
                            src="man.jpg"
                            alt="Team"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <div className="font-medium text-blue-950">Alex Martin</div>
                            <div className="text-xs text-gray-500">Founder & Instructor</div>
                        </div>
                    </div>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-12 bg-indigo-600 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
                <div>
                    <div className="font-bold text-lg">Ready to start learning?</div>
                    <div className="text-sm text-indigo-100">
                        Join thousands of learners today.
                    </div>
                </div>
                <div className="flex gap-3">
                    <a
                        href="#signup"
                        className="px-4 py-2 rounded-md bg-white text-indigo-600 font-medium"
                    >
                        Get Started
                    </a>
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-md border border-white text-white"
                    >
                        Contact
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
