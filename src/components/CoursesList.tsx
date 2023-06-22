import React from 'react'
import { Link } from 'react-router-dom'
export default function CoursesList() {
    const courses = [['Javascript Course on Data Structure and Algorithms', 'In this course, You\'ll get a basic knowledge of JS, Learn it\'s syntax, ES6, some algorithmic problems and some projects!!','/js-dsa'],
    ['Python For Automation', 'In this course, You\'ll learn to automate the boring stuff. Python is popular for its easy and dynamic nature, hence anyone can write code that looks cool and automates the boring stuff for you. As Programmers you gotta be Lazy','/python-courses'],
    ['Machine learning with Numpy, Pandas and Sklearn', 'Machine learning is a subset of Data Science where you get insights from mostly structured data, in advanced, even images, audio, video can be converted to numeric data to get insights!!','/ml-courses']]
    const courseList = courses.map(item => {
        return(
            <div className='flex items-center justify-center '>
                <Link to={item[2]} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 py-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item[0]}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item[1]}</p>
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h2 className='font-extrabold m-5 text-center text-white' style={{ fontSize: '30px' }}>Courses</h2>
            {courseList}
        </div>
    )
}
