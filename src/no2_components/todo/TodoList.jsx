import React from 'react'
import styled from 'styled-components'
import TodoListChild from './TodoListChild'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const {todoList} = useSelector(state=>state.todo); 
  return (
    <ListBlock>
      {todoList?.map(item => (
        <TodoListChild
          key={item.id}
          item={item}
        />
      ))}
    </ListBlock>
  )
}

export default TodoList

const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`