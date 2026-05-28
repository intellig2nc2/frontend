import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../no0_context/UserContext'
import { useDispatch } from 'react-redux'
import { register } from '../../no3_store/slices/userSlice'

const initialState = {
    id: "", username: "", password: "", confirmpassword: ""
}

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser(prev => (
            { ...prev, [name]: value }
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (user.password !== user.confirmpassword) {
            alert("비밀번호가 일치하지 않습니다.")
            return
        }

        dispatch(register({
            id: Date.now(), user
        }))

        alert("회원가입이 완료되었습니다.")
        navigate("/login")
        
    }

    return (
        <Page>
            <Form onSubmit={handleSubmit}>
                <Title>회원등록</Title>

                <Input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="사용자 이름"
                />

                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                />

                <Input
                    type="password"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handleChange}
                    placeholder="비밀번호 확인"
                />

                <SubmitButton type="submit">
                    회원가입
                </SubmitButton>
            </Form>
        </Page>
    )
}

export default RegisterForm

const Page = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f1f5f9;
`

const Form = styled.form`
  width: 400px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 32px;

  color: #1e293b;
  font-size: 28px;
`

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 16px;

  border: 1px solid #dbe4ee;
  border-radius: 10px;

  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  transition: 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 8px;

  border: none;
  border-radius: 10px;

  background: #3b82f6;
  color: white;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #2563eb;
  }
`