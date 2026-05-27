import React from 'react'
import styled from 'styled-components'

const TodoTemplate = ({ children }) => {
  return (
    <Page>
      <TodoBox>
        <Title>일정관리</Title>
        <Content>
          {children}
        </Content>
      </TodoBox>
    </Page>
  )
}

export default TodoTemplate

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f1f5f9;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TodoBox = styled.div`
  width: 430px;
  background: #ffffff;
  border-radius: 18px;
  padding: 32px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.12);
`

const Title = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 26px;
`

const Content = styled.div`
  width: 100%;
`