import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Common_Component/Navbar/Navbar';
import Footer from '../Pages/Common_Component/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;