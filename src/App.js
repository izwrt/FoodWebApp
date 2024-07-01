import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";


/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 *  -Serach Bar
 *  -Restaurant Container
 *      -Restaurant Cards
 * Footer
 *  -copyrights
 *  -Links
 *  -Address
 *  -Contact
 */

const AppLoyout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}



const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element : <AppLoyout />,
            children:[
               {
                    path : "/",
                    element : <Body /> 
               },
               {
                path : "/contact",
                element : <Contact />
                },
                {
                    path : "/about",
                    element : <About />
                },
                {
                    path : "/restaurantMenu/:resId",
                    element : <RestaurantMenu />
                }
            ],
            errorElement: <Error />
        }
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);