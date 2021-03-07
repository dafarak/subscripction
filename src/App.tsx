import React from 'react';
import logo from './config/assets/img/combination.png'
import mainbanner from './config/assets/img/bacgro2.jpg'
import Productpage from './components/product-page/productpage'
import Cart from './components/cart/cart'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
  NavLink
} from 'react-router-dom'; 

function App() {
  return (
 
    <div className="container">
      <div className="row">
    <div className="col-md-8">
   <div className="container">



<div id="carousel-id" className="carousel slide divpaddingnull" data-ride="carousel">
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active divpaddingnull">
      <img src={ mainbanner} alt="First slide" className="img-fluid"></img>
    </div>
  </div>
</div>
</div>
</div>
<div className="col-md-4 divpaddingnull">

<div id="carousel-id" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img src={logo} alt="First slide" className="img-fluid"></img>
    </div>
  </div>
</div>
</div>
</div>
<Router> 
    {/* <div >
      <Productpage />
    </div> */}
 

    <Switch> 
              <Route exact path='/' component={Productpage}></Route> 
        
              <Route exact path='/cart' component={Cart}></Route> 

            </Switch> 
   
    </Router>
    </div>
  );
}

export default App;
