import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-bottom: 0;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.light};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
`

export const Logo = styled.a`
  font-size: 1.2rem;
  letter-spacing: -1px;
  background-color: ${props => props.theme.light}!important;
  color: ${props => props.theme.link}!important;
  margin-right: 10px;
`

export const NavItem = styled(NavLink)`
  font-size: 1.2rem;
  padding: 0 15px;
  color: ${props => props.theme.dark}!important;

  &:hover{
    background-color: ${props => props.theme.light}!important; 
  }

  &.active{
    color: ${props => props.theme.light}!important;
    background-color: ${props => props.theme.dark}!important; 
  }
`

const Select = styled.select`
  font-size: 1rem;
  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  border-radius: 2px;
  margin-left: auto;
  display:none;
`

export const SelectOpt = styled.option`
  font-size: 1rem;
`

class NavbarHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Logo href="/">The Geeky</Logo>
          <NavItem exact to="/">Home</NavItem>
          <NavItem exact to="/about">About & CV</NavItem>
          <Select onChange={e => this.props.handleThemeChange(e)}>
            <SelectOpt value="theme1">Geeky</SelectOpt>
            <SelectOpt value="theme2">Dracula</SelectOpt>
          </Select>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default NavbarHeader