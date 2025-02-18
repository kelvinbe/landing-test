import React, { ReactNode } from 'react'
import {IconStyledButton} from '../styles/Container.styled'



interface IConButton{
    icon: ReactNode;
    btnText: string;
    btnColor: string;
    btnWidth: string;
    txtColor: string


}

const IconButton = (props: IConButton) => {

    const {icon, btnText, btnColor, btnWidth, txtColor} = props


  return (
    <IconStyledButton $btnColor={btnColor} $txtColor={txtColor} $btnWidth={btnWidth}>
        {icon}
        {btnText}
        
        
    </IconStyledButton>
  )
}

export default IconButton