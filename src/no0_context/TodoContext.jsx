import React, { createContext, useContext, useReducer } from 'react'

const TodoContext = createContext()

const initialState = {
  todoList: [
    { id: 1, subject: "HTML 공부", checked: true },
    { id: 2, subject: "CSS 공부", checked: true },
    { id: 3, subject: "React 공부", checked: true },
    { id: 4, subject: "Python 공부", checked: true },
  ],
  todoObj: {
    id: "",
    subject: "",
    checked: false
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        todoObj: {
          ...state.todoObj,
          [action.name]: action.value
        }
      }

    case "insert":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            ...state.todoObj,
            id: state.todoList.length > 0
              ? Math.max(...state.todoList.map(item => item.id)) + 1
              : 1
          }
        ],
        todoObj: {
          id: "",
          subject: "",
          checked: false
        }
      }

    case "toggle":
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.id
            ? { ...todo, checked: !todo.checked }
            : todo
        )
      }

    case "update":
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.id
            ? {
                ...todo,
                subject: action.value,
                checked: false
              }
            : todo
        )
      }

    case "delete":
      return {
        ...state,
        todoList: state.todoList.filter(todo =>
          todo.id !== action.payload.id
        )
      }

    default:
      return state;
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  return useContext(TodoContext)
}

export default TodoContext