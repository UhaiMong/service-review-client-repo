import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error404 from "../../Pages/404/Error404";
import AddReview from "../../Pages/AddReview/AddReview";
import AddServices from "../../Pages/AddServices/AddServices";
import AllService from "../../Pages/AllService/AllService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import ServiceDetailsById from "../../Pages/Services/ServiceDetailsById/ServiceDetailsById";
import Signup from "../../Pages/Signup/Signup";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import Privaterout from "../Privaterout/Privaterout";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/review',
                element: <Privaterout><Review></Review></Privaterout>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservices',
                element: <Privaterout> <AddServices></AddServices> </Privaterout>
            },
            {
                path: '/addreview/:id',
                element: <Privaterout><AddReview></AddReview></Privaterout>,
                loader: ({ params }) => fetch(`https://service-review-server-psi.vercel.app/services/${params.id}`),
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://service-review-server-psi.vercel.app/update/${params.id}`)
            },
            {
                path: '/allservice',
                element: <AllService></AllService>,
                loader: () => fetch('https://service-review-server-psi.vercel.app/allservice'),
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsById></ServiceDetailsById>,
                loader: ({ params }) => fetch(`https://service-review-server-psi.vercel.app/services/${params.id}`),
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
])