import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorElement from "../components/ErrorElement.tsx";
import CountryInfo from "../components/CountryInfo/CountryInfo.tsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorElement/>
  },
  
  {
    path:"/:name",
    element:<CountryInfo/>,
    errorElement:<ErrorElement/>
  }



]);