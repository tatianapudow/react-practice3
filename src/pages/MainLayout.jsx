import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import CartProvider from "../stores/CartProvider";

export default function MainLayout(){
  const [Cart, setCart] = useState([])

    return(
        <CartProvider>
                <header className="flex justify-center items-center gap-10 py-4">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/admin">О нас</NavLink>
                    <NavLink to="/products">Товары</NavLink>
                    <NavLink to="/cart">Корзина</NavLink>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer></footer>
        </CartProvider>
        
    );
}
