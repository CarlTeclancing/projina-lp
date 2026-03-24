import React from "react";
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