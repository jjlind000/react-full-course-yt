import React, { useState, useEffect } from 'react';

export default function MyComponent2() {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    /* triggered every time the component re-renders !!!!!
    window.addEventListener("resize", handleResize) // (event, callback)
    console.log("EVENT LISTENER ADDED");
    */

    useEffect(() => {
        window.addEventListener("resize", handleResize) // (event, callback)
        console.log("EVENT LISTENER ADDED");    

        // If you ever need to unmount the component (remove it from the DOM):
        // Do this code, either before the next re-render, or when the component unmounts:
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []) // fn is executed only when the component mounts


    useEffect(() => {
        document.title = `Size: ${width} * ${height}`
    }, [width, height]); // fn executes when width OR height change (he says AND but seems to me to be OR)


    return(
        <>        
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </>

    )
}