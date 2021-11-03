
import { BsCart3 } from 'react-icons/bs'
import { NavLink as Link } from 'react-router-dom'
import styled, { css } from 'styled-components';

export const Title = styled.h1`
    font: bold;
    font-size: xx-large;
    color: black;
    margin-left: 1em;
`
export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  
  cursor: pointer;
  &.active {
    color: #FF7B12;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 0;
    font-weight: bold;
  }
`

export const Cart = styled(BsCart3)`
    display: flex;
    align-items: center;
    padding: 2rem;
    height: 100%;
    font-size: 1.5rem;
    cursor: pointer;
  
`
export const NavDiv = styled.div`
    display: flex;
    //align-items: center;
`
export const NavMenu = styled(NavDiv)`
  margin-right: -24px;
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.clicked ? "flex" :"none" )};
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    flex-direction: column;
    padding: 66px 20px;
    background: #ffffff;
    color: #fff;
    transition: transform .25s ease;
    will-change: transform;
    transform: translateX(-100%);
    overflow-y: scroll;
    z-index: 6;
    ${props => props.clicked ? css`
      transform: translateX(0);
      box-shadow: -0.125rem 0 1.25rem 0 #343851;
    `: ``};
    /* flex-direction: column;
    position: absolute;
    background-color: white;
    
    align-items: flex-start;
    width: 50%;
    height: 100vh; */
  }
  
  
`
export const NavBtn = styled(NavDiv)`
  align-items: center;
  padding: 1em;
  justify-content: flex-start;
`
export const BarDiv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 1em;

  }
`
export const Img = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`
export const MenuLabel = styled.div`
    display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 0.6rem;
    padding-left: 1em;
    padding-right: 0.3rem;
    cursor: pointer;
    text-align: center;
    z-index:9999;
  }
  
`;

export const Icon = styled.span`
  background-color: ${(props) => (props.clicked ? "transparent" : "gray")};
  width: 1.5rem;
  height: 3px;
  display: inline-block;
  position: absolute;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: gray;
    width: 1.5rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  
  `