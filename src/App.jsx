import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout.jsx"
import Home from "./Pages/Home/Home.jsx"
import NotFound from "./Pages/NotFound/NotFound.jsx"
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx"
import Products from "./Pages/Products/Products.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import { Toaster } from "react-hot-toast"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx"

let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path:'products', element: <Products /> },
      { path:'placeOrder', element: <PlaceOrder /> },
      { path:'products/:id', element: <ProductDetails /> },
      { path:'cart', element: <Cart /> },
      { path:'*', element: <NotFound /> },
    ]
  }
])

function App() {


  return (
    <>
    <RouterProvider router={x}></RouterProvider>
    <Toaster position="bottom-right"/>
    </>
  )
}

export default App
