import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/shared/header/Header'
import Footer from '../../components/shared/footer/Footer'
import { APP_ROUTER } from '../../utils/Constants'

function MainLayout() {
    return (
        <div className="mx-auto w-full" style={{ maxWidth: '100vw' }}>
            <Header />
            <main>
                <Outlet />
                main layout
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
