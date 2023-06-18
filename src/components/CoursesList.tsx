import React from 'react'
import { Link } from 'react-router-dom'
export default function Courses() {
    return (
        <div>
            <h2 className='font-extrabold m-5' style={{fontSize: '30px'}}>Courses</h2>
            <div className='flex items-center justify-center '>
                <Link to="/" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Javascript Course on Data Structure and Algorithms</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">In this course, You'll get a basic knowledge of JS, Learn it's syntax, ES6, some algorithmic problems and some projects!!</p>
                </Link>
            </div>
        </div>
    )
}
