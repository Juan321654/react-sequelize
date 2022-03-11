import React, { useState } from "react";
import axios from "axios";

function UpdateUser({ id }) {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/users/${id}`, {
      data: user,
    });
    setUser({});
  };

  return (
    <div>
      <h4>Update user</h4>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
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
        <button disabled={!user.firstName} type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
