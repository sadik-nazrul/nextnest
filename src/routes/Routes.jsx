import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import PrivateRouts from "./PrivateRouts";
import AgentProfile from "../pages/AgentProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/properties.json')
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
                path: '/properties',
                element: <Properties></Properties>
            },
            {
                path: 'property/:title',
                element: <PrivateRouts>
                    <PropertyDetails></PropertyDetails>
                </PrivateRouts>,
                loader: () => fetch('/properties.json')
            },
            {
                path: 'agent/:nameOfAgent',
                element: <PrivateRouts>
                    <AgentProfile></AgentProfile>
                </PrivateRouts>,
                loader: () => fetch('/agents.json')
            }
        ]
    }
])