import styled from '@emotion/styled'

interface TodoItemsProps {
  active?: boolean
}

const TodoItemsWrapper = styled('li')<TodoItemsProps>`
  padding: 10px;
  text-decoration: ${({ active }) => (active ? 'line-through' : '')};
`

export const e = {
  TodoItemsWrapper,
}
