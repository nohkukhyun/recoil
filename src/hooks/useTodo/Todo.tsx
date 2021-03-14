import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import TodoList from '../../components/todoList/TodoList'
import { e } from './todo.emotion'
import { todoListFilterState, todoListState, todoUtils } from './todo.recoil'

const Todo: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)
  const setFilterTodoList = useSetRecoilState(todoListFilterState)
  const { todoTotal, todoRemind } = useRecoilValue(todoUtils)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTodoAdd()
    }
  }

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setFilterTodoList(`${value}`)
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
    setInputValue('')
  }

  return (
    <e.TodoWrapper>
      <e.TodoInputWrapper>
        <h3>Todo</h3>
        <p
          style={{ fontSize: '11px', color: '#999' }}
        >{`${todoRemind}/${todoTotal}`}</p>
      </e.TodoInputWrapper>
      <e.TodoInputWrapper>
        <Input
          type="text"
          placeholder={'todo..'}
          style={{ width: '55%' }}
          onChange={handleChange}
          onKeyDown={handleEnter}
          value={inputValue}
        />
        <Button theme={'Primary'} onClick={handleTodoAdd}>
          add
        </Button>
        <select onChange={handleFilter}>
          <option value="all">SHOW ALL</option>
          <option value="completed">COMPLETED!</option>
          <option value="not">NOT YET!</option>
        </select>
      </e.TodoInputWrapper>
      <e.TodoListWrapper>
        <TodoList />
      </e.TodoListWrapper>
    </e.TodoWrapper>
  )
}

export default Todo
