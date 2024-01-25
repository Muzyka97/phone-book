import { Navigate, Outlet } from "react-router-dom";

import useIsLogin from '../../hooks/useIsLogin';

const PublicRoute = () =>{
    const isLoggedIn = useIsLogin();
    
    if(isLoggedIn ){
        return <Navigate replace to="/phone-book/contacts" />;
    }
    return <Outlet/>
};

export default PublicRoute;