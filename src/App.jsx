import { useState } from 'react'

import './App.css'
import { Character } from './components'

function App() {
  const [test, setTest] = useState(false)

  return (
    <>
      <div className='wrapper'>
        <Character test={test} setTest={() => setTest(!test)} />
      </div>
    </>
  )
}

export default App
