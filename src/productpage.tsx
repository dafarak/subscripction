import React from 'react'
import './Productpage.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Productpage extends React.Component{
    render(){
        return(
//             <div >
//                  <h2>Card Image</h2>
//   <p>Image at the top (card-img-top):</p>
// <div className="container row">
 
//   <div className="card col-sm" >
//     <img className="card-img-top" src="img_avatar1.png" alt="Card image"></img>
//     <div className="card-body">
//       <h4 className="card-title">John Doe</h4>
//       <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
//       <a href="#" className="btn btn-primary">See Profile</a>
//     </div>
//   </div>
  
//   <div className="card col-sm" >
//     <div className="card-body">
//       <h4 className="card-title">Jane Doe</h4>
//       <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
//       <a href="#" className="btn btn-primary">See Profile</a>
//     </div>
//     <img className="card-img-bottom" src="img_avatar6.png" alt="Card image" ></img>
//   </div>
// </div>
//        </div>  
<div>

<div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4">Team Page</h1>
            <p className="lead mb-0">Using Bootstrap 4 grid and utilities, create a nice team page.</p>
            <p className="lead">Snippet by<a href="https://bootstrapious.com/snippets" className="text-white">
                <u>Bootstrapious</u></a>
            </p>
        </div>
    </div>
</div>


<div className="container">
    <div className="row text-center">

       
        <div className="col-xl-4 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
                <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>

        <div className="col-xl-4 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
                <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>

        
        <div className="col-xl-4 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
                <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
     
    </div>
</div>
</div>

        
          )
    }
}
export default Productpage