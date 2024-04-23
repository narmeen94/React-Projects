import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dollarrate from './componenets/Dollarrate'
import "./componenets/DollarRate.css"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="maintext">Pakistan Automation</h1>
      <Dollarrate/>
    </>
  )
}

export default App
