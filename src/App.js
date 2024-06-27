import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element : <AppLoyout />,
            errorElement: <Error />
        },
        {
            path : "/contact",
            element : <Contact />
        },
        {
            path : "/about",
            element : <About />
        }
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);