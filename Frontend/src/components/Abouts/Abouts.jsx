import React from 'react'
import Navbar from '../Navbar'
import About from '../About'
import Footer from '../footer'

function Abouts() {
    return (
        <>
        <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <About/>
        <Footer/>
        </div>
        </>
    )
}

export default Abouts
