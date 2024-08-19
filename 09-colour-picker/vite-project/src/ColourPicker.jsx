import React, {useState} from 'react';


export default function ColourPicker() {

    const [ colour, setColour ] = useState("#FFFFFF");
    function handleColourChange(event) {
        setColour(event.target.value);
    }

    return (
        <div className='colour-picker-container'>
          <h1>ColourPicker</h1>
          {/* need to use double braces to embed css in a js object */}
          <div className='colour-display' style={{backgroundColor: colour}}>
            <p>Selected colour: {colour}</p>
          </div>             
          <label>Select a colour:</label>
          <input type="color" value={colour} onChange={handleColourChange}></input>
        </div>
    );
}
