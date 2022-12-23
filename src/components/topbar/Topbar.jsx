import "./topbar.scss"
import {Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setmenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="Wrapper">
        <div className="left">
          <a href="#intro" className="logo">Abhi Joshi</a>
          <div className="itemContainer">
          <a href="mailto:jabhi381@gmail.com" style={{color:"#B3C2F2",textDecoration:"none"}}><Mail/>
            <span>  jabhi381@gmail.com</span></a>
          
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

