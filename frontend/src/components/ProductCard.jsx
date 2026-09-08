import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const productId = product?.id || product?._id;

  const handleAddToCart = () => {
    console.log("🔥 CLICKED PRODUCT:", product);
    console.log("🔥 addToCart FUNCTION:", addToCart);

    if (!product) {
      alert("Product missing ❌");
      return;
    }

    if (typeof addToCart !== "function") {
      alert("CartContext not working ❌");
      return;
    }

    if (!user) {
      alert("Please login first 🔐");
      return;
    }

    if (user.role === "admin") {
      alert("Admin cannot add to cart ❌");
      return;
    }

    addToCart({
      ...product,
      id: productId,
    });

    console.log("✅ Added to cart");
  };

  return (
    <div className="card">
      <img src={product?.image} alt={product?.name} />

      <h3>{product?.name}</h3>

      <p className="price">Rs {product?.price}</p>

      <Link className="view" to={`/product/${productId}`}>
        View Details
      </Link>

      {/* USER BUTTON */}
      {user?.role !== "admin" && (
        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}

      {/* ADMIN PANEL */}
      {user?.role === "admin" && (
        <div style={{ marginTop: "10px" }}>
          <button style={{ background: "orange" }}>
            Edit Product
          </button>

          <button style={{ background: "red", marginLeft: "5px" }}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;