import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../stores/CartContext";

export default function ProductItem() {
  const { id } = useParams({});
  const [product, setProduct] = useState({ images: [] });


  useEffect(() => {
    async function getProduct() {
      const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await resp.json();
      setProduct(data);
    }
    getProduct();
  }, [id]);

  const {Cart, addToCart, doIncrement, doDecrement, Delete} = useContext(CartContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {product && (
        <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full transition hover:shadow-xl duration-300">
          <div className="flex justify-center mb-6">
            <img
              className="w-56 h-56 object-contain rounded-lg"
              src={product.images[0]}
              alt={product.title}
            />
          </div>


          <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">
            {product.title}
          </h3>
          <p className="text-green-600 font-bold text-center text-lg mb-4">
            ${product.price}
          </p>


          <div className="space-y-3 mb-5">
            <label className="flex items-center gap-2">
              <input type="radio" name="purchase" defaultChecked />
              <span className="text-sm text-gray-700">One time purchase</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="purchase" />
              <span className="text-sm text-gray-700">
                Subscribe and delivery every
                <select className="ml-2 border rounded-md px-2 py-1 text-sm">
                  <option>4 weeks</option>
                  <option>2 weeks</option>
                  <option>8 weeks</option>
                </select>
              </span>
            </label>
          </div>

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center border rounded-md">
              {/* <button onClick={()=>doDecrement(product)}
              className="px-2 text-gray-600">-</button>
              <span className="px-3">
                {Cart.find(item => item.id === product.id)?.quantity || 1}
              </span>
              <button onClick={()=>doIncrement(product)}
              className="px-2 text-gray-600">+</button> */}
            </div>
            <button onClick={() => addToCart(product)}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition">
              + Add to cart
            </button>
            {/* <button onClick={()=>Delete(product)}
              className="bg-red-300 hover:bg-amber-600 text-white px-5 py-2 rounded-md transition" >
             -Delete
            </button> */}
          </div>

          <p className="text-sm text-gray-500 mb-4 text-center">
            {product.description || "Premium quality handmade soy wax candle for your relaxation moments."}
          </p>


          <p className="text-center text-sm font-medium text-green-600">
            🚚 FREE SHIPPING
          </p>
        </div>
      )}
    </div>
  );
}
