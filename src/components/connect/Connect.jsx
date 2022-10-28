import "./Connect.scss"
import React ,{useState,useEffect} from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function App()  {


  
    return(
      <div className="connect" id="connect">
    
      <div className="right">
        <h2> Connect With Me </h2>
        <br></br>
        <br></br>
        
        <h4> Liked my work?</h4>
        <br></br>
        <h4>  Below are the places you can Connect with me</h4>
        <br></br>
        <div className="icons">
        <a href="https://www.linkedin.com/in/abhijoshi23/"><BsLinkedin size={70}
        onMouseOver={({target})=>target.style.color="darkblue"}
        onMouseOut={({target})=>target.style.color="black"}
         /></a> 
        <a href="https://github.com/abhijoshi23"><AiFillGithub size={85}
        onMouseOver={({target})=>target.style.color="darkblue"}
        onMouseOut={({target})=>target.style.color="black"}
         /></a>
        <a href="mailto:jabhi381@gmail.com"><AiOutlineMail size={85}
        onMouseOver={({target})=>target.style.color="darkblue"}
        onMouseOut={({target})=>target.style.color="black"}
         /></a>
        </div>
        </div>
      </div>
    );
  }

export default App;

