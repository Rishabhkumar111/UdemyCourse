import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.jsx";

const Data = ["Fundamental", "Crucial", "Core"];
function getRandomData(len) {
  return Math.floor(Math.random() * len);
}
function Header() {
  let varableData = Data[getRandomData(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {varableData} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(prop) {
  return (
    <li>
      <img src={prop.image} alt={prop.title} />
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              image={CORE_CONCEPTS[2].image}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
