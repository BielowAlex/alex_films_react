import React from 'react';
import {Footer, Header, Navigation} from "../../components";
import {useLocation,Outlet} from "react-router-dom";

const MainLayout = () => {

    const {pathname} = useLocation();

    return (
        <div className="wrapper">
            <Navigation/>
            {pathname==='/'?<Header/>:null}
            <Outlet/>
        </div>
    );
};

export {MainLayout};
