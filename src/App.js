import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import AuthProvider from './context/authProvider';
import Login from './components/Login/Login/Login';
import PrivetRoute from './PrivetRoute/PriverRoute';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute path="/blog/:id">
            <BlogPostsDetails></BlogPostsDetails>
          </PrivetRoute>
          <PrivetRoute path="/specialist/:id">
            <SpecialistsDetails></SpecialistsDetails>
          </PrivetRoute>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivetRoute path="/service/:id">
            <ServicesDetails></ServicesDetails>
          </PrivetRoute>
          <PrivetRoute path="/about">
            <About></About>
          </PrivetRoute>
          <PrivetRoute path="/doctors">
            <Doctors></Doctors>
          </PrivetRoute>
          <PrivetRoute path="/doctor/:id">
            <DoctorsDetails></DoctorsDetails>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
