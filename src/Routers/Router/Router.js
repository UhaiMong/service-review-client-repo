import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
        ]
    },
    {
        path: '*',
        element: <p className="text5xl font-extrabold text-center">The page not found !! 404 page</p>
    }
])