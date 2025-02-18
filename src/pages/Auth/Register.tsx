import React from "react";
import RegisterForm from "../../Components/Molecules/RegisterForm";


/**
 * Returning Register Page with Register Form
 */
const Register = () => {
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
      <RegisterForm />
    </div>
  );
};

export default Register;
