import React, { Suspense } from 'react';
import Category from '../Components/Category';

const Home = () => {

    return (
        <div className='mb-10 w-11/12 mx-auto'>
            <div className='md:flex mt-5   md:justify-center md:items-center md:gap-10'>
                <div className='md:w-[50%] space-y-4'>
                    <h1 className='text-4xl font-bold'>Learn, Tech, and Grow with SkillSwap</h1>
                    <p className='text-sm'>Learn, Teach, and Grow with SkillSwap empowers learners and educators to connect, share skills, and build their futures together. Explore interactive lessons, hands-on projects, and real-world experiences that help you master new abilities and transform your passion into expertise. </p>
                    <button className='btn'>Explore Courses</button>
                </div>
                <div className='md:w-[40%] '>
                    <img className='rounded-2xl' src="Banner.png" alt="" />
                </div>
            </div>

            <div>
                <Suspense fallback={<span className=" loading loading-spinner text-primary"></span>}>
                    <Category></Category>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;