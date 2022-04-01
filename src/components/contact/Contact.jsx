import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message,setMessage] = useState(false)
  
  const handleSubmit =(e)=>{ 
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/downarrow.png" alt=""/>
      </div>
      <div className="right">
        <h2> Contact Me </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank You! I'll contact you ASAP!</span>}
        </form>
      </div>
    </div>
  )
}
