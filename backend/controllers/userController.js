import User from "../models/User.js";

// Signup
export const signup = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User created" });
};

// Login
export const login = async (req, res) => {
  const user = await User.findOne(req.body);

  if (user) {
    res.json({ message: "Login success" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};