import React,{Component} from 'react';
import './ITSP.css';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl,Carousel } from 'react-bootstrap';

class ITSP extends Component{
	render(){
		return(
			<div>
			<section class="pricing" id="pricingdiv">
      <div class="container headings text-center">
        <h1 class="text-center font-weight-bold text-white" id="effect"> ITSP-2020</h1>
      </div>
      <br/>
      <div class="container">
        <div class="row">
          
          <div class="col-lg-4 col-12" data-aos="zoom-in-up">
            <div class="card text-center">
              <div class="card-header">TeamName</div>
              <div class="card-body">
                <li>$<span class="money"><img src="https://img.icons8.com/plasticine/100/000000/approve-and-update.png"/></span></li>
                <p>This is sachin kumar</p>
              </div>
              <div class="card-footer">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 card-second" >
            <div class="card text-center">
              <div class="card-header">TeamName</div>
              <div class="card-body">
                <li>$<span class="money"><img src="https://img.icons8.com/plasticine/100/000000/approve-and-update.png"/></span></li>
                <p>This is sachin kumar</p>
              </div>
              <div class="card-footer">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12" data-aos="zoom-in-up">
            <div class="card text-center">
              <div class="card-header">TeamName</div>
              <div class="card-body">
                <li>$<span class="money"><img src="https://img.icons8.com/plasticine/100/000000/approve-and-update.png"/></span></li>
                <p>This is sachin kumar</p>
              </div>
              <div class="card-footer">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
        <div class="row">
          
          <div class="col-lg-4 col-12" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="card text-center">
              <div class="card-header">TeamName</div>
              <div class="card-body">
                <li>$<span class="money"><img src="https://img.icons8.com/plasticine/100/000000/approve-and-update.png"/></span></li>
                <p>This is sachin kumar</p>
              </div>
              <div class="card-footer">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 card-second" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
            <div class="card text-center">
              <div class="card-header">TeamName</div>
              <div class="card-body">
                <li>$<span class="money"><img src="https://img.icons8.com/plasticine/100/000000/approve-and-update.png"/></span></li>
                <p>This is sachin kumar</p>
              </div>
              <div class="card-footer">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="card text-center">
              <div class="card-header">TeamName</div>
              <div class="card-body">
                <li>$<span class="money"><img src="https://img.icons8.com/plasticine/100/000000/approve-and-update.png"/></span></li>
                <p>This is sachin kumar</p>
              </div>
              <div class="card-footer">
                <a href="#">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

			</div>
			);

	}
}




export default ITSP;