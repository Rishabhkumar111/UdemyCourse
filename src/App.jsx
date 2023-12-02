import { CORE_CONCEPTS } from "./data.jsx";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.jsx";

function App() {
  const [dynamicData, setDynamicData] = useState();
  function handleClick(selctedButton) {
    setDynamicData(selctedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptsItem) => (
              <CoreConcept key={conceptsItem.title} {...conceptsItem} />
            ))}
            {/* <CoreConcept
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
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButtons
              isSelected={dynamicData === "components"}
              fun={() => handleClick("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={dynamicData === "jsx"}
              fun={() => handleClick("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={dynamicData === "props"}
              fun={() => handleClick("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={dynamicData === "state"}
              fun={() => handleClick("state")}
            >
              State
            </TabButtons>
          </menu>
          {!dynamicData ? (
            <p>Please select any topic.</p>
          ) : (
            <div className="tab">
              <h3>{EXAMPLES[dynamicData].title}</h3>
              <p>{EXAMPLES[dynamicData].description}</p>
              <pre>
                <code>{EXAMPLES[dynamicData].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
