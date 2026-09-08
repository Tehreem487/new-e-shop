import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Find matching user
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!user) {
      alert("Invalid email or password ❌");
      return;
    }

    // 3. Save login session
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successful ✅");

    setData({ email: "", password: "" });
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form className="form" onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;