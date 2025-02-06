import { useState } from 'react'
import './App.css'
import { Form } from './component/multiLevelForm/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Form</h3>
      <Form/>
    </>
  )
}

export default App
