import { atom, selector } from 'recoil'

// todo list state
export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

// todo filter state
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'all',
})

// todo filter
export const filterTodoState = selector({
  key: 'filterTodoState',
  // selector get을 이용해 원하는 값을 가져온다.
  get: ({ get }) => {
    const todoList = get(todoListState)
    const filter = get(todoListFilterState)
    switch (filter) {
      case 'completed':
        return todoList.filter((todo) => todo.todoCompleted)
      case 'not':
        return todoList.filter((todo) => !todo.todoCompleted)
      default:
        return todoList
    }
  },
})
