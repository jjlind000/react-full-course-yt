import List3 from "./List3.jsx";

function App() {
  // const fruits = [
  //   { id: 1, name: "apple", cals: 100 },
  //   { id: 2, name: "orange", cals: 50 },
  //   { id: 3, name: "banana", cals: 110 },
  //   { id: 4, name: "pineapple", cals: 200 },
  // ];

  const fruits = [
    { id: 1, name: "apple", cals: 101 },
    { id: 2, name: "orange", cals: 10 },
    { id: 3, name: "banana", cals: 110 },
    { id: 4, name: "pineapple", cals: 200 },
  ];

  const vegetables = [
    { id: 1, name: "spuds", cals: 20 },
    { id: 2, name: "celery", cals: 30 },
    { id: 3, name: "turnip", cals: 10 },
    { id: 4, name: "cabbage", cals: 30 },
  ];

  return (
    <>
      {fruits.length > 0 && <List3 items={fruits} />}
      {vegetables.length > 0 && (
        <List3 items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
