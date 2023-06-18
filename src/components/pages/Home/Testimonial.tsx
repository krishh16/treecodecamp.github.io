import React from 'react'

export default function Testimonial() {
    return (
        <div>
            <h1 className="text-center text-white" style={{fontSize: '30px'}}>See What our Alumini Have to say about their experience in treeCodeCamp:</h1>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"I have had a very good experience at treeCodecamp, Their way of teaching is unlike anything I was yet to experience, You build project and learn at the same Time!! That's really good coz I learn to do things when I actually do them, and the projects are not very easy to make either, they make sure to keep pushing your limits!"</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="data:image/jpeg;base64,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" alt="profile"/>
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Naruto Uzumaki</cite>
                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Hokage at Leaf</cite>
                        </div>
                </figcaption>
            </figure>

        </div>
    )
}