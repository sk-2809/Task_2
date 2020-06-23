import React,{Component} from 'react';
import './Home.css';
import { Button,Navbar,Nav,NavDropdown,Form,FormControl,Carousel } from 'react-bootstrap';


class Home extends Component{
	render(){
		return(
		      <section class="header-extradiv" >
      <div class="container">
      <div class="home">
      <h1>IIT Bombay</h1>
      <h2>ITSP-2020</h2>
       <p>ITSP stands for institute summer Project</p>



      </div>
        <div class="row">
          <div class="extra-div col-lg-4 col-md-4 col-12" data-aos="flip-left">
           
            <a href="#"><img src="https://img.icons8.com/office/48/000000/reviewer-male--v1.png"/></a>
            <h2>EASY TO APPLY</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          </div>
          <div class="extra-div col-lg-4 col-md-4 col-12" data-aos="fade-up">
            <a href="#"><img src="https://img.icons8.com/dusk/48/000000/experience-skill.png"/></a>
            <h2>AWESOME EXPERIENCE</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="extra-div col-lg-4 col-md-4 col-12" data-aos="flip-right">
            <a href="#"><img src="https://img.icons8.com/ultraviolet/48/000000/trophy.png"/></a>
            <h2>AWARD WINNING</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </section>




			);
	}
}

export default Home;
