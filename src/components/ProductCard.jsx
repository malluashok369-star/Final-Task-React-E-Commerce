import { useContext, useCallback } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const addToCart = useCallback(() => {
    dispatch({ type: "ADD", payload: product });
  }, [dispatch, product]);

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}