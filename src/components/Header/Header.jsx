import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { AppBar, Box, Container } from "@mui/material";

import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import Loader from "shared/Loader";

import useIsLogin from '../../hooks/useIsLogin';

const Header = () => {
    const isLoggedIn = useIsLogin();
    
    return(
        <Box>
            <AppBar position="static">
                <Box                  
                    p={2}
                    display='flex'
                    alignItems='center' 
                    flexDirection='row'
                    >
                    <Box  
                        flexGrow={1}
                    >
                        <Navigation/>  
                    </Box>

                    <Box>
                        {isLoggedIn ? <UserMenu /> : <AuthNav />}
                    </Box> 
               </Box>
            </AppBar>
            <Container>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </Container>
        </Box>
    )
};
export default Header;