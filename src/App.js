import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Home from './components/Home/Home/Home';
import Notfound from './components/Home/Notfound/Notfound';
import Services from './components/Home/Services/Services';
import Specialists from './components/Home/Specialists/Specialists';
import Navbar from './Sheard/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/specialists">
          <Specialists></Specialists>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
