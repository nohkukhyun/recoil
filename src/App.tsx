import React from 'react'
import './App.css'
import { Global, css } from '@emotion/react'
import { jsx } from '@emotion/core'
import Form from './hooks/useForm'
import Todo from './hooks/useTodo'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        box-sizing: border-box;
        li {
          padding: 0;
          margin: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }
        #App {
          position: relative;
          height: 100vh;
          width: 100%;
        }
        body {
          outline: none;
        }
      `}
    ></Global>
  )
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Form /> */}
      <Todo />
    </div>
  )
}

export default App
