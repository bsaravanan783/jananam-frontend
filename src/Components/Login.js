import React from "react";

const Login = () => {
  const handleLogin = async() => {
    // Redirect to the backend login route
    await fetch("http://localhost:8000/login",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },  
    });

  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
