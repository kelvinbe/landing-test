import React, { ReactNode } from "react";
import { IconStyledButton } from "../styles/Container.styled";


// Creating types for the icon button to aid with making this a reusable component


interface IConButton {
  icon: ReactNode;
  btnText: string;
  btnColor: string;
  btnWidth: string;
  txtColor: string;
}


// Button component returning the icon styled button component


const IconButton = (props: IConButton) => {
  const { icon, btnText, btnColor, btnWidth, txtColor } = props;

  return (
    <IconStyledButton
      $btnColor={btnColor}
      $txtColor={txtColor}
      $btnWidth={btnWidth}
    >
      {icon}
      {btnText}
    </IconStyledButton>
  );
};

export default IconButton;
