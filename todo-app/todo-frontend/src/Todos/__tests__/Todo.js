import Todo from '../Todo'
import { fireEvent, render, screen } from '@testing-library/react';

test('Todo component', () => {
  const todo = {
    _id: "63e36844b408e75f51a9bae6",
    text: "Learn about containers",
    done: false
  }
  const deleteTodo = jest.fn()
  const completeTodo = jest.fn()

  render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

  expect(screen.queryByText(todo.text)).toBeInTheDocument()
  expect(screen.queryByText('This todo is not done')).toBeInTheDocument()

  fireEvent.click(screen.queryByRole("button", { name: "Delete" }))
  expect(deleteTodo.mock.calls).toHaveLength(1)
  expect(deleteTodo.mock.calls[0][0]).toEqual(todo)

  fireEvent.click(screen.queryByRole("button", { name: "Set as done" }))
  expect(completeTodo.mock.calls).toHaveLength(1)
  expect(completeTodo.mock.calls[0][0]).toEqual(todo)
})
