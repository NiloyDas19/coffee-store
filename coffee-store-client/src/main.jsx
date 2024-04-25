import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ViewCoffeeDetails from './components/ViewCoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/coffee')
        },
        {
          path: "/addCoffee",
          element: <AddCoffee></AddCoffee>,
      
        },
        {
          path: "/updateCoffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
          
        },
        {
          path: "/coffee/:id",
          element:<ViewCoffeeDetails></ViewCoffeeDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
