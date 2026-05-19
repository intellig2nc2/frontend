import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <BrowserRouter>
      <AppContainer>
        <HeaderBar toggleMenu={toggleMenu} />

        <AppBody>
          <SiderBar isOpen={isOpen} closeMenu={closeMenu} />

          <MainContent>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/employee" element={<EmployeePage />} />
            </Routes>
          </MainContent>
        </AppBody>

        {isOpen && <Overlay onClick={closeMenu} />}
      </AppContainer>
    </BrowserRouter>
  )
}

export default App

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f4f6f8;
`

const AppBody = styled.div`
  display: flex;
  padding-top: 64px;

  @media (max-width: 480px) {
    padding-top: 56px;
  }
`

const MainContent = styled.main`
  margin-left: 220px;
  width: calc(100% - 220px);
  min-height: calc(100vh - 64px);
  padding: 32px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }
`

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;

    position: fixed;
    top: 64px;
    left: 0;

    width: 100%;
    height: calc(100vh - 64px);

    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }

  @media (max-width: 480px) {
    top: 56px;
    height: calc(100vh - 56px);
  }
`