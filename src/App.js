import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import DeployScreen from './components/views/DeployScreen';
import { Creator } from './components/participants/Creator';
import { Bidder } from './components/participants/Bidder';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/app/creator" component={Creator} />
          <Route path="/app/bidder" component={Bidder} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
