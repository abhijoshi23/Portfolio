import "./aboutme.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'
import SkillBar from 'react-skillbars';
const skills = [
  {type: "HTML", level: 100},
  {type: "CSS", level: 100},
  {type: "Javascript", level: 85},
  {type: "React", level: 75},
  {type: "NodeJS", level: 80},
];

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
      <div className="carasouel">

      <Carousel className="innercarasouel" style={{top:"2%",left:"20%",width:"60%",height:"60vh",backgroundColor:"lightgrey"}}>
  <Carousel.Item>
   <div className="carousel-1"><h3>Education</h3></div>
   <div className="content">
      <h3>Computer Programming and Analysis</h3>
      <p>Studying computer programming and Analysis at Seneca college.</p> 
      </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carousel-1"><h3>Skills</h3> </div>
  <div className="content">
    <SkillBar skills={skills}/>
      </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="carousel-1"><h3>Goals</h3></div> 
  <div className="content">
      <h3>Third slide label</h3>
      <p> To create and develop required things to the best of my potential for any organizations growth.</p>   
      </div>
  </Carousel.Item>
</Carousel>
</div>
      </div>
    </div>
  )
}

