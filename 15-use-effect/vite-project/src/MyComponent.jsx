import React, { useState, useEffect } from 'react';

export default function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor ] = useState("green");
    // to run every time; this means this will run whenever "this(???) component" re-renders, even for something completely unrelated
    // useEffect(() => { document.title = `Count: ${count}`;  });
    // to run only once, when the component mounts
    //useEffect(() => { document.title = `Count: ${count}`;  }, []);
    // to run when the component mounts, and ONLY when the value of the ***count*** variable changes
    useEffect(() => { 
        document.title = `Count: ${count} ${color}`;  
    }, [count]); // color is not in the dependency array so when changes in its state happen the side code will not execute

    //note in this code, the code will execute whenever the component re-renders
    // document.title = `Count: ${count} ${color}`;  
    //

    // useEffect(() => { 
    //     document.title = `Count: ${count} ${color}`;  
    //     return () => {
    //         // SOME CLEANUP CODE 
    //     }
    // }); 





    function addCount(){
        setCount(_count => _count+1);
    }

    function subtractCount(){
        setCount(_count => _count-1);
    }

    function changeColor(){
        setColor(_color => _color === "green" ? "red" : "green");
    }

    return (
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button>
    <button onClick={changeColor}>Change Color</button>
    </>);

}