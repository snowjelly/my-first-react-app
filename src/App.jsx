import "./App.css";

const AnimalList = (animals) => {
  function ListItem(props) {
    return <li>{props.animal}</li>;
  }

  function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return animal.startsWith("L") ? (
            <ListItem key={animal} animal={animal} />
          ) : null;
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
  if (!animals)
    throw new Error('Animals List is empty in React Component "App"');
}

export default App;
