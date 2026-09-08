import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="container" style={{ padding: "30px" }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                width="100"
                height="100"
                style={{ objectFit: "contain" }}
              />

              <div>
                <h3>{item.title}</h3>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;