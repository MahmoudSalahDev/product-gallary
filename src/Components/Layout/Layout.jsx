import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
        <Navbar/>
        <div className="container mx-auto  p-4 min-h-[90vh] pt-[85px]">
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}
