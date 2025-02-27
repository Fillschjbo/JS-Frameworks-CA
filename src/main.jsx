import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Header, Footer} from "./components/Layout/index.jsx";
import {RenderHome, RenderCart, RenderProduct, RenderContact, RenderCheckoutSuccess} from "./routes/index.jsx";

const Layout = () => (
    <>
    <Header/>
        <main className={"container mx-auto p-4"}>
            <Outlet/>
        </main>
        <Footer/>
    </>
)


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <RenderHome/>
            },
            {
                path: "product",
                element: <RenderProduct/>,
            },
            {
                path: "cart",
                element: <RenderCart/>,
            },
            {
                path: "checkoutSuccess",
                element: <RenderCheckoutSuccess/>,
            },
            {
                path: "contact",
                element: <RenderContact/>,
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
