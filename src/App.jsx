import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import AboutMe from "./components/aboutme/aboutme"
import Contact from "./components/contact/Contact"
import Projects from "./components/projects/Projects"
import Menu from "./components/menu/Menu"
import React, { useState } from "react";

import "./app.scss"

function App() {
  const [menuOpen,setmenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <div className="sections" >
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
    </div>
    
    
  );
}

export default App;
