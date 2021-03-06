import React from 'react';
import logo from '../src/img/combination.png'
import mainbanner from '../src/img/bacgro2.jpg'
import Productpage from './productpage'
import Cart from './cart'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
 
    <div >
      <div className="row">
    <div className="col-md-8">
   <div className="container ">



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
      <Productpage />
      <Cart/>
    </div>
  );
}

export default App;
