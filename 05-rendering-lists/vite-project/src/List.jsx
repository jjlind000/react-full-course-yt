

function List (){

    const fruits = ["apple", "orange", "banana", "pineapple"];
    fruits.sort();
    // map takes a callback, a fn expression, or an arrow fn
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return (<ol>{listItems}</ol>);

}

export default List;