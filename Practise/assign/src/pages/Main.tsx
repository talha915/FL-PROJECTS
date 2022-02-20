import React from 'react';
import routes from '../config/routes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Main: React.FunctionComponent<{}> = (props)=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index)=> {
                        console.log(route);
                        return(
                            <Route 
                                key={index}
                                path={route.path}
                                element={<route.component />}
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;