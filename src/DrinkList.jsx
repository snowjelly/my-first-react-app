const Drink = (name) => {
  if (name !== "tea" && name !== "coffee") return;
  let plantPart;
  let caffeineContent;
  let age;
  if (name === "tea") {
    plantPart = "leaf";
    caffeineContent = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    plantPart = "bean";
    caffeineContent = "80–185 mg/cup";
    age = "1,000+ years";
  }
  return {
    plantPart,
    caffeineContent,
    age,
    name,
  };
};

function DrinkComponent({ name }) {
  const drink = Drink(name);
  return (
    <section>
      <h1>{drink.name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{drink.plantPart}</dd>
        <dt>Caffeine content</dt>
        <dd>{drink.caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{drink.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <DrinkComponent name="tea" />
      <DrinkComponent name="coffee" />
    </div>
  );
}
