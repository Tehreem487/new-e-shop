const Admin = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user || user.role !== "admin") {
    return <h2>Access Denied ❌</h2>;
  }

  return (
    <div className="container">
      <h2>Admin Panel 👨‍💼</h2>
      <p>Welcome Admin: {user.name}</p>

      <p>Here you can manage products (future feature)</p>
    </div>
  );
};

export default Admin;