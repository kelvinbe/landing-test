import React from "react";
import {
    ContainerRegister,
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
import { IoCheckboxSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


type Inputs = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string

};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({

    defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
  });

  const handleRegister = () => {
    navigate('/')
  };

    const navigate = useNavigate()
  

  const inputSt = {
    width: "100%",
    padding: "10px 15px",
    margin: "10px 0",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStPass = {
    width: "100%",
    padding: "10px 15px",
    margin: "10px 0",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    margin: '5px',
  };

  const IconButtonData = [
    { text: "FACEBOOK", color: "#5856D6", icon: <FaFacebookF /> },
    { text: "TWITTER", color: "#00BCD4", icon: <FaTwitter /> },
    { text: "GOOGLE", color: "#D84226", icon: <TiSocialGooglePlus /> },
  ];

  return (
    <div style={{ width: 700 }}>
      <ContainerRegister>
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
            Nice to meet you :)
          
          </span>
          <span style={{ fontFamily: "open sans", fontSize: 14 }}>
          Just register to join with us
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
              <h2>Register</h2>
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
              <span onClick={() => navigate('/')} style={{ color: "#9C27B0",marginLeft: 12 }}>Already have account?</span>
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
            <span style={{ padding: 10 }}> or register with email</span>
            <span
              style={{
                display: "flex",
                width: "62px",
                height: "1px",
                backgroundColor: "#000000",
              }}
            ></span>
          </div>

          <form style={{ width: "84%" }} onSubmit={handleSubmit(handleRegister)}>
            <input
              placeholder="Name"
              style={inputSt}
              {...register("name")}
            />

            <input
              placeholder="Email"
              style={inputSt}
              {...register("email", { required: true, })}
            />
        {errors.email && <span style={{fontSize: '10px', color: 'red'}}>This email is required</span>}


            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div style={{width: '50%'}}>
            <input
              placeholder="Password*"
              type="password"
              style={inputStPass}
              {...register("password", { required: true })}
            />
        {errors.password && <span style={{fontSize: '10px', color: 'red'}}>This password is required</span>}

            </div>

                <div style={{width: '50%',marginLeft: 53, }}>

                <input
                type="password"
              placeholder="Repeat Password*"
              style={inputStPass}
              {...register("confirmPassword", { required: true })}
            />
        {errors.confirmPassword && <span style={{fontSize: '10px', color: 'red'}}>This confirm password is required</span>}

                </div>

            </div>
          

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
              <span style={{ display: "flex" }}>
                <IoCheckboxSharp color="#8BC34A"  size={50} />
                <text style={{ fontSize: "8px" }}>I have read and accept the Terms of Service & Privacy Policy *</text>
              </span>
              <Button txtColor="white" btnColor="#8BC34A" btnText="CONTINUE" />

            </div>

          </form>
        </FormSection>
      </ContainerRegister>
    </div>
  );
};

export default RegisterForm;
