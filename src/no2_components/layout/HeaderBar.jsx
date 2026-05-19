import React from 'react'
import styled from 'styled-components'

const HeaderBar = ({ toggleMenu }) => {
  return (
    <Header>
      <LeftBox>
        <MenuButton onClick={toggleMenu}>
          ☰
        </MenuButton>

        <Logo>Logo</Logo>
      </LeftBox>

      <ButtonBox>
        <LoginButton>로그인</LoginButton>
        <JoinButton>회원가입</JoinButton>
      </ButtonBox>
    </Header>
  )
}

export default HeaderBar

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 64px;

  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 28px;
  z-index: 1300;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    height: 56px;
  }
`

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border: none;
    border-radius: 8px;

    background-color: #ffffff;
    color: #111827;

    font-size: 24px;
    cursor: pointer;
  }

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
    font-size: 22px;
  }
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #222222;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`

const BaseButton = styled.button`
  border: none;
  cursor: pointer;

  padding: 8px 14px;
  border-radius: 8px;

  color: white;
  font-size: 14px;

  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`

const LoginButton = styled(BaseButton)`
  background-color: #2563eb;
`

const JoinButton = styled(BaseButton)`
  background-color: #111827;
`