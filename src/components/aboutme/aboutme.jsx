import "./aboutme.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme" >
      <div className="container" >
      <h1>About Me</h1>
      <p className="para1"> I am a web developer based in,Toronto,ON. I always had interest in programming and web development
       since my high school days. My goal is to develop things that helps in making world a better place. 
      </p>
      <p className="para2"> Currently focused on learning and trying different things in development everyday
      </p>  
      <div className="carasouel" style={{width:"100%",height:"60vh"}}>

      <Carousel style={{top:"2%",left:"6%",width:"90%",height:"60vh"}}>
  <Carousel.Item>
   <div className="carousel-1"><h3>Education</h3></div>
   <div className="content">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
      </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carousel-1"><h3>Skills</h3> </div>
  <div className="content">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
      </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carousel-1"><h3>Goals</h3></div> 
  <div className="content">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>   
      </div>
  </Carousel.Item>
</Carousel>
</div>
      </div>
    </div>
  )
}

