import { useContext } from "react";
import { CartContext } from "../stores/CartContext";
import { NavLink } from "react-router-dom";

export default function CartPage() {
  const { cart, doIncrement, doDecrement, Delete } = useContext(CartContext)

  const subTotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  if (cart.length === 0)
    return (
      <section className="text-center py-20">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h1>
        <NavLink
          to="/products"
          className="text-green-600 hover:underline font-medium"
        >
          Back to shopping
        </NavLink>
      </section>
    );

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold text-center mb-2">
        Your cart items
      </h1>
      <div className="text-center mb-10">
        <NavLink
          to="/products"
          className="text-green-600 hover:underline font-medium"
        >
          Back to shopping
        </NavLink>
      </div>

     
      <div className="grid grid-cols-4 text-gray-500 text-sm font-medium border-b pb-2 mb-4">
        <p className="text-left">Product</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Total</p>
      </div>

    
      {cart.map((product) => (
        <div className="grid grid-cols-4 items-center border-b py-6" >
          <div className="col-span-2 flex items-center gap-6">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {product.title}
              </h3>
              <button
                onClick={() => Delete(product.id)}
                className="text-green-600 hover:underline text-sm mt-1"
              >
                Remove
              </button>
            </div>
          </div>

          
          <p className="text-center text-gray-700">${product.price}</p>

          
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => doDecrement(product.id)}
              className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3">{product.quantity}</span>
            <button
              onClick={() => doIncrement(product.id)}
              className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          
          <p className="text-right font-semibold text-gray-800">
            ${(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      ))}

   
      <div className="flex justify-between items-center mt-10 pt-6 border-t">
        <div>
          <p className="text-sm text-gray-500">
            Tax and shipping cost will be calculated later
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-800 font-medium">
            Sub-total:{" "}
            <span className="font-semibold text-green-700">
              ${subTotal.toFixed(2)}
            </span>
          </p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition">
            Check-out
          </button>
        </div>
      </div>
    </section>
  );
}
