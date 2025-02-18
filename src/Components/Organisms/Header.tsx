import React from 'react'
import {HeaderContainer} from '../styles/Header.styled'
import Logo from "../../assets/Logo.png";
import Button from '../Atoms/Button';
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";




const HeaderLinks = [{name: 'Home', link: '/home'},{name: 'Users', link: '/users'}, {name:'Posts', link: '/posts'} ]

const Header = () => {
  return (
    <HeaderContainer>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={Logo} width={100} height={100} />
        
        {HeaderLinks.map((lin) => {
            return <Link to={{ pathname: lin.link,
            }} style={{padding: 5, color: 'white', fontSize: 20}}>{lin.name}</Link>
        })}
    </div>

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <span style={{fontSize: 20}}>SIGN IN</span>
    <div>
        <Button btnText='Register' btnColor='#8BC34A' txtColor='white' />
    </div>
    <div style={{marginLeft: 20}}>
        <IoSettingsSharp size={30} color='white' />
    </div>
</div>

    </HeaderContainer>
  )
}

export default Header