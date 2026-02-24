import { useEffect, useState } from 'react'

export const Character = ({ test, setTest }) => {
  const [name, setName] = useState('Jan')
  const [age, setAge] = useState(30)

  useEffect(() => {
    if (test) {
      console.log('Counter is at zero')
    }
  }, [test])

  return (
    <div>
      {name} ma {age} lat.
      <button onClick={setTest}>Toggle test</button>
    </div>
  )
}

export default Character
