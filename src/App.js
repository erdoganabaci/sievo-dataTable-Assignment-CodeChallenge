import "./App.css";
import { DataShowTable } from "./components/dataShowTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sievo Code Challenge.</p>
        <DataShowTable />
        <a
          className="App-link"
          href="https://github.com/erdoganabaci"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
