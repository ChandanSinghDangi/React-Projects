import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/Layout/LayOut.jsx'
import Home from './Components/MainContent/Home.jsx'
import Electronics from './Components/MainContent/Electronics.jsx'
import Jwelery from './Components/MainContent/Jewellery.jsx'
import Jewellery from './Components/MainContent/Jewellery.jsx'
import MansCloths from './Components/MainContent/MansCloths.jsx'
import WomensCloths from './Components/MainContent/WomensCloths.jsx'


const router = createBrowserRouter([


  {

    path: '/',
    element: <LayOut />,
    children: [

      {
        path: '',
        element: <Home />
      },

      {
        path: '/electronics',
        element: <Electronics />
      },

      {
        path: '/jewellery',
        element: <Jewellery />
      },

      {
        path: '/manscloths',
        element: <MansCloths />
      },

      {
        path: '/womenscloths',
        element: <WomensCloths />
      }

      
    ]
    
  }


])


createRoot(document.getElementById('root')).render(


  <StrictMode>

    <RouterProvider router={router}/>

  </StrictMode>,


)







