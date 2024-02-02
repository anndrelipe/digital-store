import { useState } from 'react'
import './Global.css'
import CompleteHeader from './components/CompleteHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CompleteHeader />
    </>
  )
}

export default App
