import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import CartProvider from './contexts/CartContext'

import { Toaster } from 'react-hot-toast'

import { router } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CartProvider>
    <Toaster
      position='top-right'
      reverseOrder={false}
    />
      <RouterProvider router={router}/>
    </CartProvider>
)
