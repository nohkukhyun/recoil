import React from 'react'
import { e } from './todoitems.emotion'

interface TodoItemsProps {
  children?: any
}

const TodoItems: React.FC<TodoItemsProps> = ({ children }: TodoItemsProps) => {
  return <e.TodoItemsWrapper>{children}</e.TodoItemsWrapper>
}

export default TodoItems
