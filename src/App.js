import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Create from './Create/Create';
import NavBar from './NavBar/Navbar';
import Releve from './Releve/Releve';
import Incident from './Incident/Incident';
import Footer from './Footer/Footer';
import Facture from './Facture/Facture';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router forceRefresh={true}>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AutoReleve" exact component={Releve} />
          <Route path="/Reclamation" exact component={Incident} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Inscription" exact component={Create} />
          <Route path="/Facture" exact component={Facture} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
