import React from 'react'
import styled from 'styled-components'
import { change, insert } from '../../no3_store/slices/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const TodoInsert = () => {
  const dispatch = useDispatch()
  const { todoObj } = useSelector(state => state.todo)

  const handleChange = (e) => {
    const { name, value } = e.target

    dispatch(change({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(insert())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="subject"
        value={todoObj.subject}
        onChange={handleChange}
        required
        placeholder="할 일을 입력하세요."
      />

      <Button type="submit">입력</Button>
    </Form>
  )
}

export default TodoInsert

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`

const Input = styled.input`
  flex: 1;
  padding: 13px 14px;

  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline: none;

  font-size: 15px;
  color: #1e293b;
  box-sizing: border-box;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.16);
  }
`

const Button = styled.button`
  padding: 0 18px;

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