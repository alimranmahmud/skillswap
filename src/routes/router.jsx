import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Plans from "../Pages/Plans";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Error from "../Components/Error";
import CardDetails from "../Pages/CardDetails";
import OrderCard from "../Pages/OrderCard";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Loading from "../Components/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/plans',
                element: <Plans></Plans>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: () => fetch("/skills_data.json"),
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/order',
                element: <PrivateRoute>
                    <OrderCard></OrderCard>
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }

        ]
    },
    {
        path: '/card_details/:id',
        element: <PrivateRoute>
            <CardDetails></CardDetails>,
        </PrivateRoute>,
        loader: () => fetch("/skills_data.json"),
        hydrateFallbackElement: <Loading></Loading>

    },
    {
        path: '*',
        element: <Error></Error>
    }
])