import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CourseCard from './CourseCard';

const categoryPromise = fetch("/category.json")
    .then(res => res.json())

const Courses = () => {
    const { id } = useParams();
    const [data, setData] = useState([])

    const categoryData = use(categoryPromise);


    const categoryObj = categoryData.find(data => data.id == id);
    // .log(categoryObj.categoryName)

    const SkillData = useLoaderData();

    useEffect(() => {
        const skillDatas = SkillData.filter(skill => skill.category == categoryObj.categoryName);
        // .log(skillDatas)
        setData(skillDatas)
    }, [SkillData, categoryObj.categoryName])





    return (

        <div className='md:w-11/12 mx-auto'>
            <p>Courses : {data.length}</p>
           <div className='grid grid-cols-1 md:gap-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3'>
             {
                data.map (d=><CourseCard key={d.id} datas={d}></CourseCard>)
            }
           </div>
        </div>
    );
};

export default Courses;