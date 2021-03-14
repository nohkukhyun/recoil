import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filterTodoState, todoListState } from '../../hooks/useTodo/todo.recoil'
import Button from '../Button/Button'
import TodoItems from '../todoItems/TodoItems'
import { e } from './todolist.emotion'

interface TodoListProps {
  children?: any
}

const TodoList: React.FC<TodoListProps> = ({ children }: TodoListProps) => {
  const todoList = useRecoilValue(filterTodoState)
  const setTodoList = useSetRecoilState(todoListState)

  const handleCompleted = (index: number) => {
    const newList = todoList?.map((data) =>
      data.id === index
        ? { ...data, todoCompleted: !data.todoCompleted }
        : data,
    )
    setTodoList(newList)
  }

  return (
    <e.TodoListWrapper>
      {todoList?.map((todo, i) => {
        return (
          <e.TodoItemsFlex key={i}>
            <TodoItems active={todo.todoCompleted}>{todo.todoText}</TodoItems>
            <Button theme={'mint'} onClick={() => handleCompleted(todo.id)}>
              completed
            </Button>
          </e.TodoItemsFlex>
        )
      })}
    </e.TodoListWrapper>
  )
}

export default TodoList
