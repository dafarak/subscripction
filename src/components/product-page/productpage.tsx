import React from 'react'
import './Productpage.css';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import myData from '../../config/db.json';

class Productpage extends React.Component{
    subScription: any = [];
    cartItem: any = [];
    getData() {
        console.log("data", myData);
        this.subScription = myData;
    }
    onOrderClick(data: any) {
        this.cartItem = JSON.parse(localStorage.getItem("cartItems") || "[]");
        let findObj=this.cartItem.find((x:any)=>x.id==data.id);
        if(findObj){
            return   window.location.href = "/cart";
        }
        if (!!this.cartItem && this.cartItem.length > 0) {
            this.cartItem.push(data);
            localStorage.setItem("cartItems", JSON.stringify(this.cartItem));
        } else {
            this.cartItem.push(data);
            localStorage.setItem("cartItems", JSON.stringify(this.cartItem));
        }
        window.location.href = "/cart";
  
    }
    render(){
        this.getData();
        return(
  
<div>

{/* <img src={logo} className="img-fluid  bannerdiv" alt="Responsive image"></img> */}







    
    {/* subscripcation section */}
<div className="container">
	<div className="row">
    {this.subScription.map((rental: any) => {
                            return (  <div className="col-md-4">
                            <div className="profile-card-4 text-center"><img src={rental.img} className="img imgsize img-responsive"></img>
                                <div className="profile-content">
                                    <div className="profile-name">{rental.name}
                                        <p>{rental.tag}</p>
                                    </div>
                                    <div className="profile-description"><b>{rental.description}</b></div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="profile-overview">
                                                <b>PRICE(per month)</b>
                                                <h4>${rental.price}</h4></div>
                                                <button type="button" className="btn btn-primary btn-circle btn-sm"  onClick={() => this.onOrderClick(rental)}>Subscribe</button>
                                        </div>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>);
                        })}
    {/* <div className="col-md-4">
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
</div> */}

{/* <div className="col-md-4">
  
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
    </div> */}
{/* </div> */}
		{/* <div className="col-md-4">
 
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
    </div> */}
{/* </div> */}
	</div>
</div>
</div>

        
          )
    }
}
export default Productpage
