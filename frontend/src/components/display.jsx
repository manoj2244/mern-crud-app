import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Display = (props) => {

  const {handleDelete,users} = props;


  // useEffect(() => {
  //   axios.get(`${API_URL}/users`)
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.error("Error fetching users:", err));
  // }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {users?.map((user, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#f0f0f0"
            }}
          >
            <div style={{ flex: 1 }}><strong>{user.username}</strong></div>
            <div style={{ flex: 2 }}>{user.email}</div>
            <div                 onClick={() => handleDelete(user._id)}
>
              
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor:"pointer"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
