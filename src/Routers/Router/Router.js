import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error404 from "../../Pages/404/Error404";
import AllService from "../../Pages/AllService/AllService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import ServiceDetailsById from "../../Pages/Services/ServiceDetailsById/ServiceDetailsById";
import Signup from "../../Pages/Signup/Signup";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allservice',
                element: <AllService></AllService>,
                loader: () => fetch('http://localhost:5000/allservice'),
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsById></ServiceDetailsById>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])