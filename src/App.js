import logo from "./logo.svg";
import "./App.css";
import Navigator from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Landing/>
    </div>
  );
}

export default App;
