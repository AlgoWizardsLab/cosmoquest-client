import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Explore_Universe from "../Pages/Explore_Universe/Explore_Universe";
import Timeline from "../Pages/Timeline/Timeline";
import Star_Map from "../Pages/Star_Map/Star_Map";
import Article from "../Pages/Article/Article";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main/>,
    children:[
        {
            path:"",
            element: <Home/>
        },
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"explore",
            element:<Explore_Universe/>
        },
        {
            path:"timeline",
            element:<Timeline/>
        },
        {
            path:"star-map",
            element:<Star_Map/>
        },
        {
            path:"articles",
            element:<Article/>
        },
        {
            path:"news",
            element:<News/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"*",
            element:<Error/>
        }
    ]
  }
]);

export default router;