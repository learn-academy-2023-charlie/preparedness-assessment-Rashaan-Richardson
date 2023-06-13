import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [name, setName] = useState("")
  const nameInput = (input) => {
    setName(input.target.value)
  }
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Rashaan Richardson</Label>
          <Input onChange={nameInput} value={name}/>
        </div>
        {/* <Button>Click Me</Button> */}
        <Button>Reset</Button>
        <ModalComponent name={name} />
      </div>
    </div>
  )
}

export default App
