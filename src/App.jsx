import "./App.css";

const AnimalList = (animals) => {
  if (!animals || animals === null)
    throw new Error("Animals is null or undefined");
  function ListItem(props) {
    return <li>{props.animal}</li>;
  }

  function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return (
            animal.startsWith("L") && <ListItem key={animal} animal={animal} />
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
};

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  return <div>{AnimalList(animals)}</div>;
}

export default App;
