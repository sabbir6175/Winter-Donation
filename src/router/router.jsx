import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import DonationCompanions from "../component/DonationCompanions";
import HowToHelp from "../component/HowToHelp";
import Dashboard from "../component/Dashboard";
import Banner from "../component/Banner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonateDetails from "../component/DonateDetails";
import ErrorPage from "../component/ErrorPage";
import UpdateProfile from "../pages/updateProfile";
import PrivateRoute from "./PrivateRoute";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/DonationCampaigns',
        element: <DonationCompanions></DonationCompanions>,
        loader: ()=>fetch('/DonationData.json')
      },
      {
        path: '/DonationCampaigns/:id',
        element: <PrivateRoute><DonateDetails></DonateDetails></PrivateRoute>,
        loader: async ({params})=>{
            const response = await fetch('/DonationData.json')
            const data = await response.json()
            const singleData = data.find(D =>D.id == params.id)
            return singleData;
        }
      },
      {
        path: '/HowToHelp',
        element: <HowToHelp></HowToHelp>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/login/Register',
        element:<Register></Register>
      },
      
      ],
      
    },
  ]);
  export default router