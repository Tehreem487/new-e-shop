import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={form.message} />

        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;