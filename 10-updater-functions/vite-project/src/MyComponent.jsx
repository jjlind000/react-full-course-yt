import React, { useState } from 'react';

export default function MyComponent() {

    const [ count, setCount ] = useState(0);
    function increment() {
        // NB: React batches together updates for performance reasons. 
        //     For each of the three invocations below, the current state is still "count".
        //     Only after the third invocation will the updates be done, and for each one the argument will be the same
        //     E.g. if the value of count when the increment function is entered is 5, the argument to all three
        //     invocations of setCount will be 5+1 i.e. 6, so count will be set to 6 three times. 
        setCount(c => c+1); // NB c represents the previous state (I would say the current state)
        setCount(c => c+1); // When we pass in an updater function, we are adding the updater functions to a queue
        setCount(c => c+1); // So during the next render, each function will be called and executed, in order, with the new state being reflected
                            // in the subsequent invocation
    }
    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset() {
        setCount(0);
    }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
