import React, { useState, useEffect, useRef } from 'react';


export default function MyComponent() {

    let [ number, setNumber ] = useState(0);

    const inputRef = useRef(0); // useRef returns an object that has one property of "current"; if you pass a value in you can set the value of current

    console.log(inputRef);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }) // with no dependency array, will be triggered every time the component re-renders

    function handleClick(){
        setNumber(_number => _number+1);
    }
    function handleClickUsingRef(){
        inputRef.current++;
        console.log(inputRef.current);
    }

    return (
        <div>
            <button onClick={handleClickUsingRef}>
                Click me!!!!
            </button>
        </div>
    )
}
