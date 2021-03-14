import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import TodoList from '../../components/todoList/TodoList'
import { e } from './todo.emotion'
import { todoListState } from './todo.recoil'

const Todo: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleTodoAdd = () => {
    setTodoList((oldList) => {
      const id = oldList.length ? oldList.length : 0
      return [
        ...oldList,
        {
          id,
          todoText: inputValue,
          todoCompleted: false,
        },
      ]
    })
  }

  return (
    <e.TodoWrapper>
      <h3>Todo</h3>
      <e.TodoInputWrapper>
        <Input
          type="text"
          placeholder={'todo..'}
          style={{ width: '80%' }}
          onChange={handleChange}
        />
        <Button theme={'primary'} onClick={handleTodoAdd}>
          add
        </Button>
      </e.TodoInputWrapper>
      <e.TodoListWrapper>
        <TodoList />
      </e.TodoListWrapper>
    </e.TodoWrapper>
  )
}

export default Todo
