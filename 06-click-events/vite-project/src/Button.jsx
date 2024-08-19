// rfc 
export default function Button() {

    // define an arrow function
    const handleClick = () => console.log("ouch!");
    // use a template string i.e. in ` ` 
    const handleClick2 = (name) => console.log(`${name} stop clicking me!!`);

    /* to get emoji picker: windows + . */    
    return (<button onClick={() => handleClick2("yo!!")}>click me 😊</button>);
}


