import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";


import Details from "../Components/Details/Details";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/blog";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import Error from "../Pages/Error/Error";





const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/education.json')
            },
            {
                path: '/about',
                element: <PrivetRouter><About></About></PrivetRouter>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
            {
                path: '/details/:id',
                element: <PrivetRouter><Details></Details></PrivetRouter>,
                loader:()=>fetch('/education.json')
            },
            {
                path: '/blog',
                element: <PrivetRouter><Blog></Blog></PrivetRouter>
            }
        ]
    }
])

export default Router;