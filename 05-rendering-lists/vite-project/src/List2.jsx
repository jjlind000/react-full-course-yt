

function List2 (){

    const fruits = [
      { id: 1, name: "apple", cals: 100 },
      { id: 2, name: "orange", cals: 50 },
      { id: 3, name: "banana", cals: 110 },
      { id: 4, name: "pineapple", cals: 200 },
    ];
    fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical
    fruits.sort((b,a) => a.name.localeCompare(b.name)); // reverse alphabetical
    fruits.sort((a,b) => a.cals - b.cals); // numeric
    fruits.sort((a,b) => b.cals - a.cals); // reverse numeric
    // map takes a callback, a fn expression, or an arrow fn


    const lowCalFruits = fruits.filter(fruit => fruit.cals <=100);
    const highCalFruits = fruits.filter(fruit => fruit.cals >100);
    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
                                             {fruit.name}: &nbsp;
                                             <b>{fruit.cals}</b>
                                          </li>

    )

    return (<ol>{listItems}</ol>);

}

export default List2;