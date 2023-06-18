import React from 'react'
import NavBar from '../../NavBar'
import Footer from '../../Footer'
import MainBody from './MainBody'
import Testimonial from './Testimonial'

export default function Home() {
  return (
    <div className='dark:bg-gray-900'>
      <NavBar />
      <MainBody/>
      <Testimonial/>
      <Footer />
    </div>
  )
}
