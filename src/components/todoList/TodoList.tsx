import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../hooks/useTodo/todo.recoil'
import Button from '../Button/Button'
import TodoItems from '../todoItems/TodoItems'
import { e } from './todolist.emotion'

interface TodoListProps {
  children?: any
}

const TodoList: React.FC<TodoListProps> = ({ children }: TodoListProps) => {
  const todoList = useRecoilValue(todoListState)

  return (
    <e.TodoListWrapper>
      {todoList.map((todo, i) => {
        return (
          <e.TodoItemsFlex key={i}>
            <TodoItems>{todo.todoText}</TodoItems>
            <Button theme={'mint'}>completed</Button>
          </e.TodoItemsFlex>
        )
      })}
    </e.TodoListWrapper>
  )
}

export default TodoList
