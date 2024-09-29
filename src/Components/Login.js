import React from "react";

const Login = () => {
  const handleLogin = () => {
    // Redirect to backend login route
    window.location.href = "http://localhost:8000/login";
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
