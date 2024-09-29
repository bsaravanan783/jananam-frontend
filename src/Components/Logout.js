import React from "react";

const Logout = () => {
  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };

  return (
    <div>
      <button onClick={handleLogin}>LogOut</button>
    </div>
  );
};

export default Logout;
