import React, { useState } from "react";
import axios from "axios";

function CreateUsers() {
  const [users, setUsers] = useState({});

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4000/users`, {
      data: users,
    });
    setUsers({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="First Name"
          autoFocus
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
      </label>
      <br />
      <label>
        Email:
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email"
        />
      </label>
      <br />
      <button disabled={!users.firstName} type="submit">
        Submit
      </button>
    </form>
  );
}

export default CreateUsers;
