import { useState, useEffect } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // 🔥 Create default admin (only once)
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.find((u) => u.role === "admin");

    if (!adminExists) {
      const admin = {
        name: "Admin",
        email: "admin@gmail.com",
        password: "1234",
        role: "admin"
      };

      users.push(admin);
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find((u) => u.email === data.email);
    if (exist) {
      alert("User already exists ❌");
      return;
    }

    // ✅ Always save as USER
    const newUser = {
      ...data,
      role: "user"
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful 🎉");

    setData({ name: "", email: "", password: "" });
  };

  return (
    <div className="container">
      <h2>Signup</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />

        {/* ❌ Role dropdown removed */}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;