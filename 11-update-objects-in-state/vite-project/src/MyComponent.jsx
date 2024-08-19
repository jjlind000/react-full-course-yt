import React, { useState } from "react";

export default function MyComponent() {
    
    const [ car, setCar ] = useState(
        { year: 2004, make: "Ford", model: "Fiesta" });


    function handleYearChange(e) { // note that bc we're creating a js object within an arrow fn the js object needs to be surrounded by parentheses i.e. (  ) 
        setCar(_car => ({..._car, year: e.target.value})); // spread operator; _car represents the "previous state"
    }    
    function handleMakeChange(e) {
        setCar(_car => ({..._car, make: e.target.value})); // spread operator
    }    
    function handleModelChange(e) {
        setCar(_car => ({..._car, model: e.target.value})); // spread operator
    }    
  return (
    <div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/>
        <input type="text" value={car.make} onChange={handleMakeChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
  )
}
