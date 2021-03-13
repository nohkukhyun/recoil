import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonType {
  theme?: string
}

const ButtonWrapper = styled('button')`
  border-radius: 10px;
  background-color: #fff;
  appearance: none;
  border: 1px solid #777;
  padding: 10px;
  display: block;
  margin: 10px 0;
  ${({ theme }) => theme === 'primary' && PrimaryTheme}
  ${({ theme }) => theme === 'mint' && MintTheme}
`

const PrimaryTheme = css`
  background-color: #fff;
  border: 1px solid blue;
  color: blue;
`

const MintTheme = css`
  background-color: #fff;
  border: 1px solid #80ffdb;
  color: #80ffdb;
`

export const e = {
  ButtonWrapper,
}
