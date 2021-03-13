import React from 'react'
import { e } from './button.emotion'

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: any
  theme?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  theme,
}: ButtonProps) => {
  return (
    <>
      <e.ButtonWrapper onClick={onClick} theme={theme}>
        {children}
      </e.ButtonWrapper>
    </>
  )
}

export default Button
