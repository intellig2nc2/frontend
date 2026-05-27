import React from 'react'
import TodoTemplate from '../no2_components/todo/TodoTemplate'
import TodoInsert from '../no2_components/todo/TodoInsert'
import TodoList from '../no2_components/todo/TodoList'
import { useTodo } from '../no0_context/TodoContext'

const TodoPage = () => {
  const { state } = useTodo()
  const { todoList, todoObj } = state

  return (
    <TodoTemplate>
      <TodoInsert todoObj={todoObj} />

      <TodoList todoList={todoList} />
    </TodoTemplate>
  )
}

export default TodoPage