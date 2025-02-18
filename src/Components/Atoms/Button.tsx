import React from 'react'
import {StyledButton} from '../styles/Container.styled'


interface IButton {
    btnColor: string;
    txtColor: string;
    btnText: string;
}

const Button = (props: IButton) => {

    const {btnColor, txtColor, btnText} = props
  return (
    <StyledButton  $btnColor={btnColor} $txtColor={txtColor}>
        
        {btnText}
        
    </StyledButton>



  )
}

export default Button