import { useContext } from "react";
import { CartContext } from "../stores/CartContext";


export default function CartPage(){
    const {Cart, addToCart, doIncrement, doDecrement, Delete} = useContext(CartContext)
    return(
        <section>
            <h1>Корзина</h1>
            {
                Cart.map(product=>(
                    <div>
                        <h3>{product.title}</h3>
                        <img className="w-full" src={product.images[0]} alt="" /> 
                        <p>{product.description}</p>
                        <p>{product.price}</p> 
                        <button onClick={()=>doDecrement(product)}
                            className="px-2 text-gray-600">-</button>
                        <span className="px-3">
                            {Cart.find(item => item.id === product.id)?.quantity || 1}
                        </span>
                        <button onClick={()=>doIncrement(product)}
                            className="px-2 text-gray-600">+</button>
                        <button
                            onClick={()=>Delete(product)}
                            className="bg-red-500 px-2 py-1 text-white rounded-md cursor-pointer"
                        >Удалить</button>
                    </div>
                ))
            }
        </section>
        
    );
}