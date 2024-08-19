import React, { useState } from 'react';

// update an array of objects
export default function MyComponent() {

   
    const [cars, setCars] = useState([]);  // cars is an array of objects
    const [carYear, setCarYear ] = useState(new Date().getFullYear());
    const [carMake, setCarMake ] = useState("");
    const [carModel, setCarModel ] = useState("");

    function handleAddCar(){
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars(_cars => [..._cars, newCar]); // make an array, with contents of prev cars and add newCar
        // reset state after car has been added
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(cars.filter((_, idx) => idx !== index)); // idx not strictly equal to index
    }
    function handleChangeYear(event){
        setCarYear(event.target.value);
    }
    function handleChangeMake(event){
        setCarMake(event.target.value);
    }
    function handleChangeModel(event){
        setCarModel(event.target.value);
    }


  return (

    <div>
        <h2>Cars</h2>
        <ul>
            {cars.map((element, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                   {element.year} {element.make} {element.model}
                </li>
            )}
        </ul>

        <input type="number" value={carYear} onChange={handleChangeYear} /> <br/>
        <input type="text" value={carMake} onChange={handleChangeMake} placeholder='Enter car make'/> <br/>
        <input type="text" value={carModel} onChange={handleChangeModel} placeholder='Enter car model' /> <br/>
        <button onClick={handleAddCar}>Add Car</button><br/>        
    </div>
  )
}
