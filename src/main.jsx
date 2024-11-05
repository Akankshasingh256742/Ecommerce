import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './page/Home-Page/HomePage.component.jsx'
import productCategories from './page/product-category'
import CollectionPreview from './component/collections/CollectionPreview.jsx'

const productCart = productCategories.sections

const router = createBrowserRouter([
     {
          path:'/',
          element:<App />,
          children:[{
                path:'/',
                element:<HomePage productCart={productCart} />,
          },{
                  path:'/Shops',
                  element:<CollectionPreview/>
                },
                ]
              
     },
     
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
