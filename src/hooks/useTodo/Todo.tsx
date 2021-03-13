import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { e } from './todo.emotion'

const Todo: React.FC = () => {
  return (
    <e.TodoWrapper>
      <h3>Todo</h3>
      <e.TodoInputWrapper>
        <Input type="text" placeholder={'todo..'} />
        <Button theme={'mint'}>add</Button>
      </e.TodoInputWrapper>
    </e.TodoWrapper>
  )
}

export default Todo
