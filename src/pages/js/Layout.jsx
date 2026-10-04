import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/js/header';
import Footer from '../../components/js/footer';

function Layout() {
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
}

export default Layout;