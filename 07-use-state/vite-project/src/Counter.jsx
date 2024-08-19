import React, {useState} from 'react'

export default function Counter() {
  const  [count, setCount] = useState(0);
  const incrementCount = () => setCount(count+1); // can't do:  const incrementCount = setCount(++count);
  const decrementCount = () => setCount(count-1); // also can't do: const f=()=> setCount(count++); as count is read-only in the program
  const resetCount = () => setCount(0);

  return (   
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={() => decrementCount()}>Decrement</button>
        <button className="counter-button" onClick={() => incrementCount()}>Increment</button>
        <button className="counter-button" onClick={() => resetCount()}>Reset</button>
    </div>
  )
}
