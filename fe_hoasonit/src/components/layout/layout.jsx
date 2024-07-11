import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import { UserProvider } from '../context/user-context'

export default function Layout() {
    return (
        <div>
            <UserProvider>
                <Header />

                <div>
                    <Outlet />
                </div>

                <Footer />
            </UserProvider>
        </div>
    )
}