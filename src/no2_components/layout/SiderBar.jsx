import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SiderBar = ({ isOpen, closeMenu }) => {
  return (
    <Sidebar $isOpen={isOpen}>
      <Menu>
        <MenuItem to="/" onClick={closeMenu}>
          Home
        </MenuItem>

        <MenuItem to="/todo" onClick={closeMenu}>
          할일
        </MenuItem>

        <MenuItem to="/employee" onClick={closeMenu}>
          고용인 정보
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SiderBar

const Sidebar = styled.aside`
  position: fixed;
  top: 64px;
  left: 0;

  width: 220px;
  height: calc(100vh - 64px);

  background-color: #111827;
  color: white;

  padding: 24px 16px;
  z-index: 1100;

  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }

  @media (max-width: 480px) {
    top: 56px;
    height: calc(100vh - 56px);
    width: 200px;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const MenuItem = styled(NavLink)`
  text-decoration: none;

  padding: 14px 16px;
  border-radius: 10px;

  color: #d1d5db;
  transition: 0.2s;
  font-size: 15px;

  &:hover {
    background-color: #1f2937;
    color: #ffffff;
  }

  &.active {
    background-color: #2563eb;
    color: #ffffff;
    font-weight: bold;
  }
`