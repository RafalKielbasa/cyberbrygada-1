export const Counter = ({ count, increment, decrement }) => {
  return (
    <div className='counter'>
      {count}
      <div className='wrapper'>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  )
}

export default Counter
