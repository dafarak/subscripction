import React from 'react'
import './Productpage.css';
import logo from '../src/img/bacgro.jpg'
import red from '../src/img/red.jpg'
import yellow from '../src/img/yellow.jpeg'
import green from '../src/img/green.jpg'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Productpage extends React.Component{
    render(){
        return(
  
<div>

{/* <img src={logo} className="img-fluid  bannerdiv" alt="Responsive image"></img> */}







    
    {/* subscripcation section */}
<div className="container">
	<div className="row">
    <div className="col-md-4">
    {/* <h4 className="text-center"><strong>STYLE 3</strong></h4>
    <hr></hr> */}
    <div className="profile-card-4 text-center"><img src={red} className="img imgsize img-responsive"></img>
        <div className="profile-content">
            <div className="profile-name">Manage Service
                <p>@johndoedesigner</p>
            </div>
            <div className="profile-description"><b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</b></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="profile-overview">
                        <b>PRICE(per month)</b>
                        <h4>$1300</h4></div>
                        <button type="button" className="btn btn-primary btn-circle btn-sm">Subscribe</button>
                </div>
                
                
                
            </div>
        </div>
    </div>
</div>

<div className="col-md-4">
    {/* <h4 className="text-center"><strong>STYLE 3</strong></h4>
    <hr></hr> */}
    <div className="profile-card-4 text-center"><img  src={yellow} className="img imgsize img-responsive"></img>
        <div className="profile-content">
            <div className="profile-name">Consultation
                <p>@johndoedesigner</p>
            </div>
            <div className="profile-description"><b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</b></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="profile-overview">
                        <b>PRICE(per month)</b>
                        <h4>$1300</h4></div>
                        <button type="button" className="btn btn-primary btn-circle btn-sm">Subscribe</button>
                </div>
                
                
                
            </div>
        </div>
    </div>
</div>
		<div className="col-md-4">
    {/* <h4 className="text-center"><strong>STYLE 3</strong></h4>
    <hr></hr> */}
    <div className="profile-card-4 text-center"><img  src={green} className="img imgsize img-responsive"></img>
        <div className="profile-content">
            <div className="profile-name">Training
                <p>@johndoedesigner</p>
            </div>
            <div className="profile-description"><b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</b></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="profile-overview">
                        <b>PRICE(per month)</b>
                        <h4>$1300</h4></div>
                        <button type="button" className="btn btn-primary btn-circle btn-sm">Subscribe</button>
                </div>
                
                
                
            </div>
        </div>
    </div>
</div>
	</div>
</div>
</div>

        
          )
    }
}
export default Productpage