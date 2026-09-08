import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}
      </div>

      <div className="right">
        {user ? (
          <>
            <span style={{ color: "white" }}>
              👤 {user.name}
            </span>
            <button onClick={logout} className="btn signup">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn" to="/login">Login</Link>
            <Link className="btn signup" to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;