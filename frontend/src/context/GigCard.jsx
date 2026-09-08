import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function GigCard({ gig }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{gig.title}</h3>
      <p>{gig.description}</p>
      <p>Rs {gig.price}</p>

      <button onClick={() => addToCart(gig)}>
        Add to Cart
      </button>
    </div>
  );
}

export default GigCard;