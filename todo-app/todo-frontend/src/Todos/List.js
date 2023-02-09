import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map(todo => <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />).reduce((acc, cur, index) => [...acc, <hr key={`hr-${index}`} />, cur], [])}
    </>
  )
}

export default TodoList
