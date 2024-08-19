import React, { useState } from 'react';

export default function MyComponent() {

    const [ foods, setFoods ] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(e){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        // setFoods([...foods, newFood]); works but better to use an updater function: 
        setFoods(_foods => [..._foods, newFood]);
    }

    function handleRemovedFood(index){
        setFoods(foods.filter((_, idx) => idx != index)); // using underscore is convention for an ignored parameter
    }

  return (
    <div>
      <h2>List of foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemovedFood(index)}>
            {food}
          </li>
        ))}
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add food</button>
      </ul>
    </div>
  );
}
