const Data = ['Fundamental', 'Crucial', 'Core'];
function getRandomData(len){
  return Math.floor(Math.random()*len);
}
function Header() {
  let varableData = Data[getRandomData(3)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {varableData} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
