import react from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Footer from './Footer';
import Error from './Error';
import Services from './Services';
import Dots from "react-activity/dist/Dots";



function App() {
  return (
    
 
        <Router>
         <div>
        <Navbar />
       <Switch>
       
          <Route exact path="/" component={Home} />
          <Route exact  path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route component={Error} />
          <Dots color="green" size={90} speed={1.4} animating={true}  />
          </Switch>
          <Footer />
        </div>
      </Router>
     

   
    
  );
}

export default App;
