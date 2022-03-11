import React from "react";
import axios from "axios";
import { useState } from "react";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:4000/users`);
    setUsers(res.data);
  };

  let styles = {
    flex: {
      display: "flex",
      flexDirection: "column",
    },
    border: {
      border: "1px solid lightgray",
    },
  };

  const displayUsers = users.map((user) => (
    <div key={user.id} style={{ ...styles.border, ...styles.flex }}>
      <div>
        <DeleteUser id={user.id} setUsers={setUsers} users={users} />
      </div>

      <div>
        <strong>{user.firstName}</strong>
      </div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
      <UpdateUser id={user.id} />
    </div>
  ));

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Fetch Users
      </button>
      <div style={styles.flex}>{displayUsers}</div>
    </div>
  );
}

export default FetchUsers;
