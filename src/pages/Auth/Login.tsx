import React from "react";
import LoginForm from "../../Components/Molecules/LoginForm";


/**
 * Returning Login Page with Login Form
 */

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6A1B9A",
        width: "100%",
        height: "100vh",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
