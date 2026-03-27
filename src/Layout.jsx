import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import dashboardCalendar from './assets/dashboard/dashboardCalendar.png';
import dashboardInvoice from './assets/dashboard/dashboardInvoice.png';
import dashboardResources from './assets/dashboard/dashboardResources.png';
import dashboardSettings from './assets/dashboard/dashboardSettings.png';

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;

    // ── Scroll to top on route change ──
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // ── Handle anchor links (e.g., /#features) ──
    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location.hash]);

    let dashboardImage;
    if (pathname === '/') {
        dashboardImage = dashboardCalendar;
    } else if (pathname === '/pricing') {
        dashboardImage = dashboardInvoice;
    } else if (pathname === '/solutions') {
        dashboardImage = dashboardResources;
    } else if (pathname === '/about') {
        dashboardImage = dashboardSettings;
    } else {
        dashboardImage = dashboardCalendar; // default
    }

    return(
        <React.Fragment>
            <Header/>    
                <Outlet/>
            <Footer dashboardImage={dashboardImage}/>
            {/* <Navigate to={'/home'}/> */}
        </React.Fragment>
    )
}

export default Layout