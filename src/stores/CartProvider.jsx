import { useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({children}){

    const [cart,setCart]=useState([])
    function doIncrement(id) {
        setCart((prev) => {
            return prev.map((p) => {
            if (p.id === id) {
                const newQuantity = p.quantity + 1;

                if (newQuantity > 25) {
                return { ...p, quantity: 25 };
                } else {
                return { ...p, quantity: newQuantity };
                }
            } else {
                return p;
            }
            });
        });
}
    function addToCart(product) {
        
        setCart((prevCart) => {
            const existProduct = prevCart.find((item) => item.id === product.id);

            if (existProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }


            return [...prevCart, { ...product, quantity: 1 }];
        });
    }

    function Delete(id){
        setCart((prev) => prev.filter((p) => p.id !== id));
    }
    function doDecrement(id) {
        setCart((prev) => {
            return prev.map((p) => {
            if (p.id === id) {
                const newQuantity = p.quantity - 1;

                // ограничиваем минимум до 1
                if (newQuantity < 1) {
                return { ...p, quantity: 1 };
                } else {
                return { ...p, quantity: newQuantity };
                }
            } else {
                return p;
            }
        })
  })
  
  
 
}
    return(
        <CartContext.Provider
            value={{cart,addToCart,Delete,doDecrement,doIncrement}}>
            {children}
        </CartContext.Provider>
        
    );


 
}

