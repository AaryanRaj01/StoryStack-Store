import React from 'react'
import Navbar from '../Navbar'
import Course from '../Course'
import Footer from '../footer'

function Courses() {
    return (
        <>
        <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <Course/>
        <Footer/>
        </div>
        </>
    )
}

export default Courses
