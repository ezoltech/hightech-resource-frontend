import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

// import Explore from './Pages/Explore';
// import Sample from './Pages/About';
// import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    Children: [
      {
        path: "/",
        element: <Home />
      },
      // {
      //   path: "/About",
      //   element: <About />
      // },
      // {
      //   path: "/",
      //   element: <Explore/>
      // }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
