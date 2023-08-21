import Actions from "./Actions";
import "./App.css";
import Cards from "./Cards/Cards";

function App() {
  return (
    <div className="App">
      <Actions />
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
