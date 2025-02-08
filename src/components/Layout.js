import React from 'react'
import CustomNavbar from './CustomNavbar'
import { Outlet } from 'react-router-dom'
import Foot from './Foot'
import Chatbot from './ChatBot'

export default function Layout() {
    return (
        <>
            <CustomNavbar />

            <main>
                <Outlet />
            </main>
            <Chatbot />
            <Foot />
        </>
    )
}
