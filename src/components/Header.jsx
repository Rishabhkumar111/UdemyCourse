import reactImg from "../assets/react-core-concepts.png";

const Data = ["Fundamental", "Crucial", "Core"];
function getRandomData(len) {
  return Math.floor(Math.random() * len);
}

export default function Header() {
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