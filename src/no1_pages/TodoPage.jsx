import React from 'react'
import TodoTemplate from '../no2_components/todo/TodoTemplate'
import TodoInsert from '../no2_components/todo/TodoInsert'
import TodoList from '../no2_components/todo/TodoList'
// import { useTodo } from '../no0_context/TodoContext'

const TodoPage = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>

      <TodoList/>
    </TodoTemplate>
  )
}

export default TodoPage