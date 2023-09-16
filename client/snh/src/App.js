import Terminal from "./components/Terminal";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="top-heading">
        <h1>Nothing to See Here</h1>
        <h1 className="thanks">
          Thanks for using NSH. More features will be added soon.
        </h1>
      </div>
      <Terminal />
    </div>
  );
}

export default App;
