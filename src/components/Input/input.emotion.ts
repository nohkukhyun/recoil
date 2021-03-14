import styled from '@emotion/styled'

interface InputTypes {
  style
}

export const InputWrapper = styled('input')<InputTypes>`
  border-radius: 10px;
  background-color: #fff;
  appearance: none;
  border: 1px solid #777;
  padding: 10px;
  display: block;
  margin: 10px 0;
  ${({ style }) => style}
`
