import "./App.css";
import Navbar from "./components/Navbar";
import docs from "./components/docs";
import Home from "./components/Home";
import features from "./components/features";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={docs} />
          <Route path="/features" exact component={features} />
        </Switch>

      </Router>
    </div>
  );
} 

export default App;