import { useState } from "react";

function NameInput({ firstName, lastName, handleChange }) {
  return (
    <form>
      <input
        type="text"
        id="first-name-input"
        value={firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        id="last-name-input"
        value={lastName}
        onChange={handleChange}
      />
    </form>
  );
}

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "React",
    age: 100,
  });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const handleChange = (e) => {
    if (e.target.id === "first-name-input") {
      setPerson({ ...person, firstName: e.target.value });
    } else {
      setPerson({ ...person, lastName: e.target.value });
    }
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <NameInput
        firstName={person.firstName}
        lastName={person.lastName}
        handleChange={handleChange}
      />
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
