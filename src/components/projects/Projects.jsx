import "./projects.scss"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { AiFillGithub } from 'react-icons/ai';
import { grey } from "@material-ui/core/colors";


export default function Projects() {
  

  return (
    <div className="projects" id="projects">
        <div className="container">
            <h1>Projects</h1>
        </div>
        <div className="grid"> 
        <Container>
          <Col>
          <Row>
        <Card style={{ width: '35rem' }} bg='light' >
      <Card.Body>
        <Card.Title>Portfolio Website</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Portfolio</Card.Subtitle>
        <Card.Text>
          A personal portfolio website showcasing my skills and information about things which I have worked on.
        </Card.Text>
        <Card.Link href="#intro">Home</Card.Link>
        <Card.Link href="https://github.com/abhijoshi23/Portfolio">Github</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '35rem' }} bg='light'>
      <Card.Body>
        <Card.Title>Spotify UI</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Clone app</Card.Subtitle>
        <Card.Text>
          An application developed by me which is a clone of Spotify and uses Spotify api to list new songs and 
          to enjoy music.
        </Card.Text>
        <Card.Link href="https://github.com/abhijoshi23/SpotifyUI">Github</Card.Link>
      </Card.Body>
    </Card>
    </Row>
    </Col>
    <Col>
          <Row>
        <Card style={{ width: '35rem' }} bg='light' >
      <Card.Body>
        <Card.Title>Do it list</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Do it list app</Card.Subtitle>
        <Card.Text>
          A Web application which updates or deletes your daily tasks to do. 
        </Card.Text>
        <Card.Link href="https://todoslistapp.vercel.app/">app link</Card.Link>
        <Card.Link href="https://github.com/abhijoshi23/Doitlistapp">Github</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '35rem' }} bg='light'>
      <Card.Body>
        <Card.Title>Data Service application</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">management app</Card.Subtitle>
        <Card.Text>
          An application which stores the data of a user online and requires login/signup to access the data.
        </Card.Text>
        <Card.Link href="https://warm-scrubland-84593.herokuapp.com/">app link</Card.Link>
        <Card.Link href="https://github.com/abhijoshi23/web322-application">Github</Card.Link>
      </Card.Body>
    </Card>
    </Row>
    </Col>

    </Container>
    </div>
    <br></br>
    <h4 className="git"> I keep updating my work on Github<a href="https://github.com/abhijoshi23"><AiFillGithub/></a></h4>
    </div>
  )
}
