import React, { useState, useEffect, useRef } from 'react';


export default function MyComponent2() {

    const inputRef1 = useRef(null); // useRef returns an object that has one property of "current"; if you pass a value in you can set the value of current
    const inputRef2 = useRef(null); // useRef returns an object that has one property of "current"; if you pass a value in you can set the value of current
    const inputRef3 = useRef(null); // useRef returns an object that has one property of "current"; if you pass a value in you can set the value of current

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }) // with no dependency array, will be triggered every time the component re-renders

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
    }

    return (
        <div>
            <button onClick={handleClick1}>Click me1!!!!</button>
            <input ref={inputRef1}/><br/>

            <button onClick={handleClick2}>Click me2!!!!</button>
            <input ref={inputRef2}/><br/>

            <button onClick={handleClick3}>Click me3!!!!</button>
            <input ref={inputRef3}/><br/>   
        </div>
    )
}
