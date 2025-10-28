import React, { useState } from "react";

export default function AddSchool() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setForm({ ...form, image: files[0] });
    else setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add School</h3>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <input type="text" name="state" placeholder="State" onChange={handleChange} />
      <input type="text" name="contact" placeholder="Contact" onChange={handleChange} />
      <input type="email" name="email_id" placeholder="Email" onChange={handleChange} />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Add School</button>
    </form>
  );
}
