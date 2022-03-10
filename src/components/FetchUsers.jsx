import React from "react";
import axios from "axios";
import { useState } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:4000/users`);
    setUsers(res.data);
  };

  const displayUsers = users.map((user) => (
    <div key={user.id}>
      <h3>{user.firstName}</h3>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
    </div>
  ));

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Fetch Users
      </button>
      {displayUsers}
    </div>
  );
}

export default FetchUsers;
