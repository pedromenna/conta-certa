import {
        BrowserRouter as Routers,
        Route,
        Routes,
        Navigate

} from `react-router-dom`

import React, { useState } from 'react';


import loginPage from `../pages/Login`
import HomePage from `page`


import {AuthProvider} from "../components/contexts/auth"


const AppRoutes = () =>{



    return(
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path = "/login" elemnt ={<loginPage/>}/>
                <Route exact path = "/login" elemnt ={<HomePage/>}/>
            </Routes>
            </AuthProvider>
        </Router>
    )
}


export default AppRoutes