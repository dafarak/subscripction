import React from 'react';
import logo from './logo.svg';
import Productpage from './productpage'
import './App.css'; 
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
  NavLink
} from 'react-router-dom'; 
import Cart from './components/cart/cart';
function App() {
  return (
    <Router> 
    {/* <div >
      <Productpage />
    </div> */}
 

    <Switch> 
              <Route exact path='/' component={Productpage}></Route> 
        
              <Route exact path='/cart' component={Cart}></Route> 

            </Switch> 
   
    </Router>

  );
}

export default App;
