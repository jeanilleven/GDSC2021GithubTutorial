import {Nav, NavLink, MenuLabel, NavMenu,Title, Cart, NavBtn, NavDiv, Img, Icon} from './NavbarElements'
import Avatar from './avatar.png'
import { useState } from 'react'
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <Nav>
                <NavDiv>
                    <MenuLabel onClick={handleClick}>
                        <Icon clicked={click}>&nbsp;</Icon>
                    </MenuLabel>
                    <NavLink to="/">
                        <Title>sneakers</Title>
                    </NavLink>
                </NavDiv>
                
                <NavMenu clicked={click}>
                    <NavLink to="/collections">
                        Collections
                    </NavLink>
                    <NavLink to="/men">
                        Men
                    </NavLink>
                    <NavLink to="/women">
                        Women
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <Cart /> 
                    <Img src = {Avatar}/> 
                </NavBtn> 
            </Nav>
        </>
        
    )
}

export default Navbar
