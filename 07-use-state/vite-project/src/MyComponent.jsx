import React, {useState} from 'react';
// we use react hooks in function-based components so make sure you're not writing a class component
export default function MyComponent() {
    // create a stateful variable and a setter function to update that variable
    // the useState() function returns an array with 2 elements: a variable and a setter function
    // use square brackets for array destructuring  
    // common naming convention is set || <Name> but it can be anything
    // calling the setter function of a stateful variable, it will trigger a re-render of the virtual DOM
    const [name, setBananas] = useState("Guest");  // specifying a default (here, "Guest") is optional
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);    
    const updateName = () => {
        //name = "Bobby Robbie"; won't work - the variable will be updated but the virtual DOM won't be updated with the new value
        setBananas("Bobby Robbie Dobbie");
        console.log(name);
    };
    const incrementAge = ()  => {
        setAge(age + 1);
    }
    const toggleEmployed = () => {
        setEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>            

            <p>Employed: { isEmployed ? "Yes" : "No" }</p>
            <button onClick={toggleEmployed}>Set employed</button>               
        </div>
    );
}