import React from 'react'
import Navbar from '../Navbar'
import Footer from '../footer'
import Contact from '../Contact'

function Contacts() {
    return (
        <>
        <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <Contact/>
        <Footer/>
        </div>
        </>
    )
}

export default Contacts
