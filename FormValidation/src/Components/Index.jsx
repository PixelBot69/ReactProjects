import React, { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    email: ""
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateInput(name, value);
  }

  function validateInput(name, value) {
    switch (name) {
      case "username":
        setError((prevErrors) => ({
          ...prevErrors,
          username: value.length < 3 ? "Username must be at least 3 characters" : ""
        }));
        break;
      case "password":
        setError((prevErrors) => ({
          ...prevErrors,
          password: value.length < 3 ? "Password must be at least 3 characters" : ""
        }));
        break;
      case "email":
        setError((prevErrors) => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email"
        }));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleFormChange}
        />
        {error.username && <div>{error.username}</div>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleFormChange}
        />
        {error.password && <div>{error.password}</div>}

        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleFormChange}
        />
        {error.email && <div>{error.email}</div>}
      </form>
    </div>
  );
}

export default FormValidation;
