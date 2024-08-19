function Food() {

    const food1 = "Bananas";
    const food2 = "Orange";


    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}


export default Food