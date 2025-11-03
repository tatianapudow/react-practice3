import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import ProductsPage from "./pages/ProductsPage";
import ProductItem from "./pages/ProductItem";
import CartPage from "./pages/CartPage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:IndexPage
            },
            {
                path:'admin',
                Component:AdminPage
            },
            {
                path:'products',
                Component: ProductsPage
            },
            {
                path:'products/:id',
                Component:ProductItem

            },
            {
                path:'cart',
                Component:CartPage
            }


        ]
    }
])