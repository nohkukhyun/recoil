import React from 'react'
import * as e from './input.emotion'

interface InputProps {
  type?: string
  placeholder?: string
  name?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onClick?: () => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  style?: any
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  onKeyDown,
  name,
  style,
}: InputProps) => {
  return (
    <>
      <e.InputWrapper
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
      ></e.InputWrapper>
    </>
  )
}

export default Input
