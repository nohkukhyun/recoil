import styled from '@emotion/styled'
import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const FormWrapper = styled('div')`
  width: 400px;
  height: auto;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  position: relative;
  margin: 20% auto;
`

const Form: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log('click')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    console.log(value)
  }

  return (
    <FormWrapper>
      <Input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="password2"
        name="password2"
        onChange={handleChange}
      />
      <Button onClick={handleClick}>submit</Button>
    </FormWrapper>
  )
}

export default Form
