import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import Github from './components/GitHub/GitHub.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import './index.css'
import Layout from './Layout.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />

      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"user/:id",
        element:<User />
      },
      {
        // loader:{githubInfoLoder},
        path:"github",
        element:<Github />
      }
    ]
  }
])

//2nd method 

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path="" element={<Home />} ></Route>
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />

//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
