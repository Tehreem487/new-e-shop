import { useParams } from "react-router-dom";
import products from "../data";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (p) => (p.id || p._id) == id
  );

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="detail">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>Rs {product.price}</h3>
    </div>
  );
};

export default ProductDetail;