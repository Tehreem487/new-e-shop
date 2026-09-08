import products from "../data";
import ProductCard from "../components/ProductCard";


const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to My Store 🛍️</h1>
        <p>Best products at affordable prices</p>
      </div>

      <h2>Products</h2>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        
      </div>
    </div>
    
  );
};

export default Home;