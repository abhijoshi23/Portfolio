import "./projects.scss"

export default function Projects() {
  return (
    <div className="projects" id="projects">
        <div className="container">
            <h1>Projects</h1>
        </div>
        <div className="description"> 
          <h2> Here are some projects on which I have worked on </h2>
          <ul style={{listStyle: 'square'}}>
          <h3><li><a href="#intro">Portfolio website </a></li>
          <li><a href="https://todoslistapp.vercel.app/">To Do's List</a></li>
          <li><a href="https://warm-scrubland-84593.herokuapp.com/">Data service application</a></li>
          <li>Live clock</li>
          <li>More projects coming soon <a href = "https://github.com/abhijoshi23">on </a></li>
          </h3>
          </ul>
        </div>

    </div>
  )
}
