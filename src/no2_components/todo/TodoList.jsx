import React from 'react'
import styled from 'styled-components'
import TodoListChild from './TodoListChild'

const TodoList = ({ todoList }) => {
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