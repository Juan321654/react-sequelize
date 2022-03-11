import React from "react";
import axios from "axios";

function DeleteUser({ id, users, setUsers }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return <button onClick={handleDelete}>X</button>;
}

export default DeleteUser;
