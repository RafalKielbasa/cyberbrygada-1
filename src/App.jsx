import { useState, useEffect } from 'react'

import './App.css'
import { Character } from './components'

function App() {
  const [test, setTest] = useState(false)
  const color = 'red'

  useEffect(() => {
    setTest(!test)
    console.log('Test is changed')
  }, [color])

  return (
    <>
      <div className='wrapper'>
        <Character test={test} setTest={() => setTest(!test)} />
      </div>
    </>
  )
}

export default App
