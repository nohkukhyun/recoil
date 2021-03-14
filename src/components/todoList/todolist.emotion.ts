import styled from '@emotion/styled'

const TodoListWrapper = styled('ul')`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`

const TodoItemsFlex = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
`

export const e = {
  TodoListWrapper,
  TodoItemsFlex,
}
