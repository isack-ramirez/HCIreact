import logo from "./logo.svg";
import "./App.css";
import Navigator from "./Components/navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Landing from "./Pages/Landing";
import Landingpicture from './Components/Landingpicture'
function App() {
  return (
    <div className="App">
      <Navigator />
      <Landingpicture/>
    </div>
  );
}

export default App;
