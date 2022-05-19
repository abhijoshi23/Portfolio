import "./contact.scss"
import React ,{useState,useEffect} from 'react';

function App()  {

const[Quotes,setquotes]=useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    setquotes(data)
  });
  })

  const squotes = (data) =>{
    let {text,author} = data;
    setquotes(...squotes, text="new name")
    console.log(data)
  }

  // handleSubmit((e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "POST",
  //     url:"http://localhost:3002/send",
  //     data:  this.state
  //   }).then((response)=>{
  //     if (response.data.status === 'success') {
  //       alert("Message Sent.");
  //       this.resetForm()
  //     } else if (response.data.status === 'fail') {
  //       alert("Message failed to send.")
  //     }
  //   })
  // });

  
    return(
      <div className="contact" id="contact">
        <div className="left">
        {/* {Quotes.map(Quotes => <div>{Quotes.text  }</div>)}
        squotes.map((upgrade)=>
    <button key={upgrade.text}onClick={()=>squotes(upgrade)}></button> */}
        {console.log(Quotes)}
        { Quotes.length != 0 ? Quotes && Quotes[4].text : "nothing is commingh"}
      </div> 
      <div className="right">
        <h2> Contact Me </h2>
        <form id="contact-form" method="POST">
          <div className="form">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name"  />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
      </div>
    );
  }

export default App;

