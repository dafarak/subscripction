import React from 'react'
import './cart.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Cart extends React.Component {
    cartItems: any = [];
    totalAmount: any = 0;
    textInput: any;
    couponCode: any = [
        { id: 1, code: "RRD4D32", minimumAmount: "5000", discountAmount: "10" },
        { id: 2, code: "44F4T11", minimumAmount: "10000", discountAmount: "15" }
    ]
    constructor(props: any) {
        super(props);
        this.textInput = React.createRef();
        this.getCartItems();
        this.state = this.cartItems;
        this.state=this.totalAmount;
        this.cartItems.forEach((key: any, value: any) => {
            this.totalAmount += key.subTotal;
        });
    }

    onIncreaseQuantity(cart: any, index: number) {
        this.totalAmount = 0;
        cart.quantity = ++cart.quantity;
        cart.subTotal = cart.quantity * cart.price;
        this.cartItems.splice(index, 1, cart);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

        this.setState(this.cartItems);
        this.cartItems.forEach((key: any, value: any) => {
            this.totalAmount += key.subTotal;
        });
    }
    onRemoveItem(cart: any, index: number){
        this.cartItems.splice(index,1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

        this.setState(this.cartItems);
        this.totalAmount = 0;
        this.cartItems.forEach((key: any, value: any) => {
            this.totalAmount += key.subTotal;
        });
    }
    onDecreaseQuantity(cart: any, index: number) {
        this.totalAmount = 0;
        cart.quantity = --cart.quantity;
        cart.subTotal = cart.quantity * cart.price;
        this.cartItems.splice(index, 1, cart);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

        this.setState(this.cartItems);
        this.cartItems.forEach((key: any, value: any) => {
            this.totalAmount += key.subTotal;
        });

    }
    onApplyCoupon(cal: any) {
      
        if (cal == "44F4T11") {
            console.log("yes");
            this.totalAmount=0;
            this.setState(this.totalAmount);
            
        }
        else {
            console.log("no");

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
                                                            <td className="border-0 align-middle">
                                                                <button className={cart.quantity == 1 ? 'btn btn-danger btn-sm disable-button' : 'btn btn-danger btn-sm'} onClick={() => this.onDecreaseQuantity(cart, i)}>-</button>
                                                                <strong>{cart.quantity}</strong>
                                                                <button className="btn btn-primary btn-sm ml-2 mr-2 " onClick={() => this.onIncreaseQuantity(cart, i)}>+</button>
                                                            </td>
                                                            {/* <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td> */}
                                                            <td className="border-0 align-middle"><button className="btn btn-danger btn-sm" onClick={() => this.onRemoveItem(cart, i)}>Remove</button></td>
                                                            
                                                        </tr>

                                                    )
                                                })}

                                                {/* <tr>
                  <th scope="row" className="border-0">
                    <div className="p-2">
                      <img  src={red} alt="" className="imgsize-cart-pro  rounded shadow-sm img-responsive"></img>
                      
                      <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                      </div>
                    </div>
                  </th>
                  <td className="border-0 align-middle"><strong>$79.00</strong></td>
                  <td className="border-0 align-middle"><strong>3</strong></td>
                  <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td>
                </tr>


                <tr>
                  <th scope="row">
                    <div className="p-2">
                      <img src={yellow}  alt="" width="70" className="imgsize-cart-pro rounded shadow-sm"></img>
                      <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Lumix camera lense</a></h5><span className="text-muted font-weight-normal font-italic">Category: Electronics</span>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle"><strong>$79.00</strong></td>
                  <td className="align-middle"><strong>3</strong></td>
                  <td className="align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a>
                  </td>
                </tr>


                <tr>
                  <th scope="row">
                    <div className="p-2">
                      <img src={green}  alt="" width="70" className="imgsize-cart-pro rounded shadow-sm"></img>
                      <div className="ml-3 d-inline-block align-middle">
                        <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Lumix camera lense</a></h5><span className="text-muted font-weight-normal font-italic">Category: Electronics</span>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle"><strong>$79.00</strong></td>
                  <td className="align-middle"><strong>3</strong></td>
                  <td className="align-middle"><a href="#" className="text-dark"><i className="fa fa-trash"></i></a>
                  </td>
                </tr> */}
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
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${this.totalAmount}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$0.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">${this.totalAmount}</h5>
                                            </li>
                                        </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                                    </div>

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
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                        <textarea name="" className="form-control"></textarea>
                                    </div>
                                    {/* couponsegment end */}

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