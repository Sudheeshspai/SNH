import Terminal from "./components/Terminal";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="top-heading">
        <h1>Nothing to See Here</h1>
        <h1 className="thanks">
          Thanks for using NSH. <br></br> We will be delivering amazing new
          features soon
        </h1>
      </div>
      <Terminal />
      <footer class="footer">
        <a
          target="_blank"
          href="https://github.com/Sudheeshspai/SNH"
          class="underline"
        >
          Made with 💙 by Fsociety
        </a>
      </footer>
    </div>
  );
}

export default App;
