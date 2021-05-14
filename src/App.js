import "./App.css";
import NavBar from "./Components/NavBar"
import { Route } from "react-router-dom"
import Home from "./Components/Home"
import Berries from "./Components/Berries"

function App() {
  return (
    <div className="app">
     <NavBar />
     <Route exact path="/" component={Home} />
     {/* <Route path="/pokemon" component={Pokemon} /> */}
     {/* <Route path="/locations" component={Locations} /> */}
     <Route path="/berries" component={Berries} />
    </div>
  );
}

export default App;
