// rfc 
export default function Button2() {

    let count = 0;
    const handleClick = (name) => {        
        if (count < 3)
        {
            count++;
            console.log(`${name} you clicked me ${count} time(s)`);
        }
        else
        {
            console.log(`${name} stop clicking me!`);
        }

    }

    /* to get emoji picker: windows + . */    
    return (<button onClick={() => handleClick("Yo!")}>click me 😊</button>);
}


