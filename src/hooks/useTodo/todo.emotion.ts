import styled from '@emotion/styled'

const TodoWrapper = styled('div')`
  width: 500px;
  height: 500px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const TodoInputWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const e = {
  TodoWrapper,
  TodoInputWrapper,
}
