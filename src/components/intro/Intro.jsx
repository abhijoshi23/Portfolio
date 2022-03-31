import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay:  2000,
      backSpeed: 60,
      strings: ['Developer', 'UI-UX Designer', 'Editor' ]});
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
       <div className="imgContainer">
         <img src="assets/abhijoshi.jpeg" alt=""></img>
         </div>
       </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi there, I'm </h2>
          <h1> Abhi Joshi </h1>
          <h3>Web <span ref={textRef}></span></h3>
        </div>
        <a href="#aboutme">
          <img src="assets/downarrow.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
