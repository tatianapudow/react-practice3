import { useContext, useState, useEffect } from "react";
import { CartContext } from "../stores/CartContext";
import { NavLink } from "react-router-dom";

export default function ProductsPage() {
    const [products, setProducts] = useState([])
    // const [cart, setCart] = useContext(CartContext)
    const {Cart, addToCart, doIncrement, doDecrement, Delete} = useContext(CartContext);
   
    useEffect(() => {
        async function getProducts() {
            const resp = await fetch('https://api.escuelajs.co/api/v1/products')
            if (resp.ok) {
                const data = await resp.json()
                setProducts(data)
            }
        }
        getProducts()
    }, [])
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4">
            <section className="text-center mb-12">
                <h1 className="text-3xl font-bold text-[#1d2b4f] mb-2">Products</h1>
                <p className="text-gray-500">
                    Order it for you or for your beloved ones
                </p>
            </section>

            <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">

                {products.map(product => (

                    <NavLink to={`/products/${product.id}`} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col">
                        <img
                            src={product.images[0]}
                            alt=""
                            className="h-40 object-contain mb-4 mx-auto" />
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-800 text-lg">
                                {product.title}
                            </h3>
                            <span className="text-green-600 font-semibold">
                                {product.price}$
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                        <button onClick={() => addToCart(product)}
                            className="mt-4 bg-[#56B280] text-white py-2 rounded-lg">
                            Add to Cart
                        </button>
                         {/* <button onClick={() => Delete(product)}
                            className="mt-4 bg-[#b25e56] text-white py-2 rounded-lg">
                            Delete
                        </button> */}

                    </NavLink>

                ))}
            </section>
        </div>
    );
}
