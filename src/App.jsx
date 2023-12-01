import { CORE_CONCEPTS } from "./data.jsx";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButtons from "./components/TabButtons.jsx";

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
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButtons>Components</TabButtons>
            <TabButtons>JSX</TabButtons>
            <TabButtons>Props</TabButtons>
            <TabButtons>State</TabButtons>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
