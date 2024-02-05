import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import SignUp from "./views/signup/SignUp";
import Login from "./views/login/Login";
import ForgotPassword from "./views/password/ForgotPassword";
import ResetPassword from "./views/password/ResetPassword";
import EmailVerification from "./views/email/EmailVerification";
import EmailLayout from "./components/EmailLayout";
import EmailValidation from "./views/email/EmailValidation";
import LandingPage from "./views/landingpage/LandingPage";
import CustomerDashboard from "./views/customerDashboard/CustomerDashboard";
import SuccessfulRegistration from "./views/success/SuccessfulRegistration";
import RequestRider from "./views/reqiuestRider/RequestRider";
import RidersHistory from "./views/ridersHistory/RidersHistory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/default",
        element: <DefaultLayout />,
        children: [
            {
                path: "customerdashboard",
                element: <CustomerDashboard />,
            },
            {
                path: "requestrider",
                element: <RequestRider />,
            },
            {
                path: "ridershistory",
                element: <RidersHistory />,
            }
        ]
    },
    {
        path: "/guest",
        element: <GuestLayout />,
        children: [
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
            }
        ]
    },
    {
        path: "/email",
        element: <EmailLayout />,
        children: [
            {
                path: "email-verification",
                element: <EmailVerification />,
            },
            {
                path: "email-validation",
                element: <EmailValidation />,
            }
        ]
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/successful-registration",
        element: <SuccessfulRegistration />,
    },
])

export default router;