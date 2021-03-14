import React from 'react'
import { e } from './todoitems.emotion'

interface TodoItemsProps {
  children?: any
  style?: any
  active?: boolean
}

const TodoItems: React.FC<TodoItemsProps> = ({
  children,
  style,
  active,
}: TodoItemsProps) => {
  const styles = { ...style }
  return (
    <e.TodoItemsWrapper style={styles} active={active}>
      {children}
    </e.TodoItemsWrapper>
  )
}

export default TodoItems
