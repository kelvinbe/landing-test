import React from "react";
import { StyledButton } from "../styles/Container.styled";


// Creating types for the button to aid with making this a reusable component

interface IButton {
  btnColor: string;
  txtColor: string;
  btnText: string;
  onclick: () => void
}

// Button component returning the styled button component
const Button = (props: IButton) => {
  const { btnColor, txtColor, btnText, onclick } = props;
  return (
    <StyledButton onClick={onclick} $btnColor={btnColor} $txtColor={txtColor}>
      {btnText}
    </StyledButton>
  );
};

export default Button;
