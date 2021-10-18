import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import BlogPostsDetails from './components/Home/BlogPostsDetails/BlogPostsDetails';
import Doctors from './components/Home/Doctors/Doctors';
import DoctorsDetails from './components/Home/DoctorsDetails/DoctorsDetails';
import Home from './components/Home/Home/Home';
import Notfound from './components/Home/Notfound/Notfound';
import Services from './components/Home/Services/Services';
import ServicesDetails from './components/Home/ServicesDetails/ServicesDetails';
import SpecialistsDetails from './components/Home/SpecialistsDetails/SpecialistsDetails';
import Footer from './Sheard/Footer/Footer';
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
        <Route path="/blog/:id">
          <BlogPostsDetails></BlogPostsDetails>
        </Route>
        <Route path="/specialist/:id">
          <SpecialistsDetails></SpecialistsDetails>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/service/:id">
          <ServicesDetails></ServicesDetails>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route path="/doctor/:id">
          <DoctorsDetails></DoctorsDetails>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
