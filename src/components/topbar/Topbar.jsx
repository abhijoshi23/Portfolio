import "./topbar.scss"
import {Mail} from "@material-ui/icons"



export default function Topbar({menuOpen,setmenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="Wrapper">
        <div className="left">
          <a href="#intro" className="logo">Abhi Joshi</a>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>jabhi381@gmail.com</span>
          
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line2"></span>
          </div>
        </div>
      </div>

    </div>
  )
}

