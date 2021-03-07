
import React from 'react';

class Cart extends React.Component {
    cartItems:any=[];
    
    onIncreaseQuantity(cart:any){
        cart.quantity=cart.quantity ++;
        cart.subTotal=cart.quantity * cart.subTotal;

    }
    onDecreaseQuantity(cart:any){
        
    }
    getCartItems(){
        this.cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    }

    
    render() {
        this.getCartItems();
        return (
           
      <div  className="container-fluid">
          <table id="cart" className="table table-hover table-condensed">
          <thead>
						<tr>
							<th style= {{width: "50%"}}>Product</th>
							<th style= {{width: "10%"}} >Price</th>
							<th style= {{width: "8%"}}  >Quantity</th>
							<th style= {{width: "22%"}}  className="text-center">Subtotal</th>
							<th style= {{width: "10%"}} ></th>
						</tr>
					</thead>
                    <tbody>
                    {this.cartItems.map((cart: any) => {
                            return (  <tr>
                            
                                <td data-th="Product">
                                        <div className="row">
                                            
                                            <div className="col-sm-2 hidden-xs"><img  style= {{width: "100%"}} src={cart.img} alt="..." className="img-responsive"/></div>
                                            <div className="col-sm-10">
                                                <h4 className="nomargin">{cart.name}</h4>
                                                <p>{cart.position}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">{cart.price}</td>
                                    <td data-th="Quantity">
                                            <button className="btn btn-danger btn-sm" onClick={() => this.onDecreaseQuantity(cart)}>-</button>
                                            <span>1</span>
                <button className="btn btn-primary btn-sm ml-2 mr-2 " onClick={() => this.onIncreaseQuantity(cart)}>+</button>
                                    </td>
                                    <td data-th="Subtotal" className="text-center">{cart.subTotal}</td>
                                    <td className="actions" data-th="">
                                    </td>
                                </tr>)
                    })}
                      
                    </tbody>
                    <tfoot>
						<tr className="visible-xs">
							<td className="text-center"><strong>Total 1.99</strong></td>
						</tr>
						<tr>
							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td >
                                <input type="text"></input>
                            </td>
                            <td >
                               <button className="btn btn-primary">Apply</button>
                            </td>
							<td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
							<td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
          </table>
      </div>
        )
    }
}
export default Cart;