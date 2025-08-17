import React from "react";
import { Outlet  ,Navigate} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
    return(
        <React.Fragment>
            <Header/>    
                <Outlet/>
            <Footer/>
            {/* <Navigate to={'/home'}/> */}
        </React.Fragment>
    )
}

export default Layout