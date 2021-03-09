import React from 'react'
import './cart.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Cart extends React.Component {
    cartItems: any = [];
    totalAmount: any = 0;
    textInput: any;
    codeUse:any
    couponamount:any
    subtotal:any
    couponCode: any = [
        { id: 1, code: "RRD4D32", minimumAmount: "5000", discountAmount: "10" },
        { id: 2, code: "44F4T11", minimumAmount: "10000", discountAmount: "15" }
    ]
    state ={
        subtotal:0,
        totalAmount:0,
        isLoggedIn: false,
        codeUse:0,
        couponamount:0
    }

    constructor(props: any) {
        
        super(props);
        this.textInput = React.createRef();
        this.getCartItems();
        this.state = this.cartItems;
        this.state.totalAmount=this.totalAmount;
        this.state.subtotal =0
        this.cartItems.forEach((key: any, value: any) => {
            this.state.subtotal += key.subTotal;
            this.state.totalAmount  = this.state.subtotal ;
        });
        this.state.codeUse = 0
        this.state.couponamount =0
    }

    onIncreaseQuantity(cart: any, index: number) {
        this.setState({
            state : {
                totalAmount:0,
                subtotal:0
               
            }

        })
        this.state.subtotal =0
        this.state.totalAmount = 0;
        cart.quantity = ++cart.quantity;
        cart.subTotal = cart.quantity * cart.price;
        this.cartItems.splice(index, 1, cart);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        this.setState(this.cartItems);
        this.setState(this.cartItems);
        for(let i=0;i<this.cartItems.length;i++){
            this.state.subtotal = this.state.subtotal + this.cartItems[i]['subTotal'] 
            this.state.totalAmount =   this.state.subtotal 

        }
    }
    onRemoveItem(cart: any, index: number){
        this.setState({
            state : {
                totalAmount:0,
                subtotal:0
            }
        })
        this.setState(this.cartItems);
        this.cartItems.splice(index,1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
if(!!this.state.subtotal){
    this.setState(this.cartItems);
    if(this.cartItems.length == 0){
        this.state.subtotal =0
    }
    this.state.subtotal =0
    this.state.totalAmount = 0
    for(let i=0;i<this.cartItems.length;i++){
        this.setState({
            state : {
                totalAmount:0,
                subtotal:0
            }
        })
        this.state.subtotal = this.state.subtotal +this.cartItems[i].subTotal
        this.state.totalAmount = this.state.subtotal;
    }
}else{
    this.state.subtotal =0
    
}
    }
    onDecreaseQuantity(cart: any, index: number) {
        this.setState({
            state : {
                totalAmount:0,
                subtotal:0
               
            }

        })
        this.state.totalAmount = 0;
        this.state.subtotal =0
        cart.quantity = --cart.quantity;
        cart.subTotal = cart.quantity * cart.price;
        this.cartItems.splice(index, 1, cart);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        this.setState(this.cartItems);
        for(let i=0;i<this.cartItems.length;i++){
            this.state.subtotal = this.state.subtotal + this.cartItems[i]['subTotal'] 
            this.state.totalAmount =   this.state.subtotal 

        }
       

    }
    onApplyCoupon= (value:any)=> {  
            if (value == "RRD4D32" &&  this.state.totalAmount >5000 &&  this.state.codeUse  ==0) {
                for(let i=0;i<this.couponCode.length;i++){
                    if (value == this.couponCode[i].code  ) {
                        this.setState({
                            state : {
                                totalAmount:0,
                                isLoggedIn:true,
                                codeUse:1 
                            }
                        })
                        this.state.codeUse  =1
                        this.state.isLoggedIn = true
                        this.state.couponamount =  (this.state.totalAmount *10)/100 
                        this.state.totalAmount = this.state.totalAmount-this.state.couponamount
                    }
                }
            }
            else if(value == "44F4T11" &&  this.state.totalAmount >10000 &&  this.state.codeUse  ==0){
                for(let i=0;i<this.couponCode.length;i++){
                    if (value == this.couponCode[i].code  ) {
                        this.setState({
                            state : {
                                totalAmount:0,
                                isLoggedIn:true  
                            }
                        })
                        this.state.codeUse  =1
                        this.state.isLoggedIn = true
                        this.state.couponamount =  (this.state.totalAmount *15)/100 
                        this.state.totalAmount = this.state.totalAmount-this.state.couponamount
                    }
                }
            }else{
                this.setState({
                    state : {
                        isLoggedIn:false
                    }
                })
                this.state.isLoggedIn = false
            }
    }
    getCartItems() {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    }
    render() {
        return (
            <div>
                <div className="px-4 px-lg-0">
                    <div className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 p-5 bg-white rounded shadow-sm mb-5">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Price</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Quantity</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.cartItems.map((cart: any, i: number) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row" className="border-0">
                                                                <div className="p-2">
                                                                    <img src={cart.img} alt="" className="imgsize-cart-pro  rounded shadow-sm img-responsive"></img>

                                                                    <div className="ml-3 d-inline-block align-middle">
                                                                        <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{cart.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">{cart.description}</span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td className="border-0 align-middle"><strong>${cart.price}</strong></td>
                                                            <td className="border-0 align-middle ">
                                                                <button className={cart.quantity == 1 ? 'btn btn-danger btn-sm disable-button' : 'btn btn-danger btn-sm'} onClick={() => this.onDecreaseQuantity(cart, i)}>-</button>
                                                                <strong className ='cart-quentity '><b>{cart.quantity}</b></strong>
                                                                
                                                                <button className="btn btn-primary btn-sm ml-2 mr-2 " onClick={() => this.onIncreaseQuantity(cart, i)}>+</button>
                                                            </td>
                                                            <td className="border-0 align-middle"><button className="btn btn-danger btn-sm" onClick={() => this.onRemoveItem(cart, i)}>Remove</button></td>
                                                            
                                                        </tr>

                                                    )
                                                })}
                       
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* cart list */}
                                <div className="col-lg-5 p-5 bg-white rounded shadow-sm mb-5">

                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${this.state.subtotal }</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$0.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Vaver</strong><strong>${this.state.couponamount}</strong></li>
                                               {/* couponsegment */}
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                            <input type="text" ref={this.textInput} id="count" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0"></input>
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill" onClick={() => this.onApplyCoupon(this.textInput.current.value)} ><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
        {this.state.isLoggedIn?<p className="font-italic mb-4  coupon-apply">Promocode is Applaied sucessfully</p>: <p className="font-italic mb-4 coupon-not-apply"> Promocode is not Apply</p>}
        
      </div>
                                    {/* couponsegment end */}
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">${ this.state.totalAmount}</h5>
                                            </li>
                                        </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                                    </div>
                                </div>

                                {/* cart list end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart