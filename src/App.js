import "./App.css";
import CreateUsers from "./components/CreateUsers";
import FetchUsers from "./components/FetchUsers";

function App() {
  return (
    <div className="App">
      <CreateUsers />
      <br />
      <FetchUsers />
    </div>
  );
}

export default App;
