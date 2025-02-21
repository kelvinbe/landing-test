import React from "react";
import {
  Container,
  ImageSection,
  FormSection,
} from "../styles/Container.styled";
import Logo from "../../assets/Logo.png";
import Rect from "../../assets/Rectangle.png";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Atoms/Button";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import IconButton from "../Atoms/IconButton";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { IoCheckboxSharp } from "react-icons/io5";


type Inputs = {
  name: string;
  email: string;
};

const LoginForm = () => {
  const {register,handleSubmit,watch,formState: { errors },} = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const navigate = useNavigate()

  const handleLogin = (values: Inputs) => {
    navigate('/home')
    console.log('name', values.name)
  console.log('email', values.email)
  };

  

  const inputSt = {
    width: "100%",
    padding: "10px 15px",
    margin: "10px 0",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const IconButtonData = [
    { text: "FACEBOOK", color: "#5856D6", icon: <FaFacebookF /> },
    { text: "TWITTER", color: "#00BCD4", icon: <FaTwitter /> },
    { text: "GOOGLE", color: "#D84226", icon: <TiSocialGooglePlus /> },
  ];

  return (
    <div style={{ width: 700 }}>
      <Container>
        <ImageSection>
          <div style={{ marginBottom: 10 }}>
            <img src={Logo} width={50} height={60} />
            {/* <img src={Rect} width={100} height={60} /> */}
          </div>
          <span
            style={{
              fontFamily: "open sans",
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            Welcome back
          </span>
          <span style={{ fontFamily: "open sans", fontSize: 14 }}>
            Please login to continue
          </span>
        </ImageSection>

        <FormSection>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <div>
              <h2>Login</h2>
              <span
                style={{
                  display: "flex",
                  width: "62px",
                  height: "8px",
                  backgroundColor: "#673AB7",
                  borderRadius: 20,
                }}
              ></span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaArrowRight color="#9C27B0" />
              <span onClick={() => navigate('/register')} style={{ color: "#9C27B0", marginLeft: 12 }}>Create new account</span>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            {IconButtonData.map((icon) => {
              return (
                <IconButton
                  txtColor="white"
                  btnColor={icon.color}
                  btnText={icon.text}
                  icon={icon.icon}
                  btnWidth={"40px"}
                />
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "62px",
                height: "1px",
                backgroundColor: "#000000",
              }}
            ></span>
            <span style={{ padding: 10 }}> or login with email</span>
            <span
              style={{
                display: "flex",
                width: "62px",
                height: "1px",
                backgroundColor: "#000000",
              }}
            ></span>
          </div>

          <form style={{ width: "84%" }} onSubmit={handleSubmit(handleLogin)}>
            <input
              placeholder="Name"
              style={inputSt}
              {...register("name")}
            />
        {errors.name && <span style={{fontSize: '12px', color: 'red'}}>This name is required</span>}

            <input
              placeholder="Password"
              style={inputSt}
              {...register("email", { required: true })}
            />
        {errors.email && <span style={{fontSize: '12px', color: 'red'}}>This password is required</span>}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ display: "flex" }}>
                <IoCheckboxSharp color="#8BC34A" size={20} />
                <text style={{ fontSize: "12px" }}>Remember</text>
              </span>
              <span style={{ fontSize: "12px", color: "#9C27B0" }}>
                Forgot password?
              </span>
            </div>

            <Button txtColor="white" btnColor="#8BC34A" btnText="CONTINUE" />
          </form>
        </FormSection>
      </Container>
    </div>
  );
};

export default LoginForm;
