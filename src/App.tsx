import './App.css';
import { FaEnvelope, FaGithub, FaLinkedin , FaItchIo} from "react-icons/fa";
//import files
import Headshot from './assets/Professional_Headshot_Yusong_Liang_croped.jpeg';
function FrontPage() {
  return (
      <div className="DarkerSection">
        <h1>Yusong Liang</h1>
        <h2>Game developer | Web Developer</h2>
      </div>
  )
}

function Profile(){
  return(  
    <div className="LighterSection">
      <h2 className="oval-bg-dark">About Me</h2>
      <img className="profileImage" src={Headshot} alt="Headshot" />
      <p className="p1">
        My name is Yusong Liang,
        I am a student at the Florida State University.
        I am a Computer Science student.
      </p>
    </div>
  );
}

function Projects(){
  const ProjectList=[
    {id:1,title:"Project 1", description:"1",link:"/project1"},
    {id:2,title:"Project 2", description:"2",link:"/project2"},
    {id:3,title:"Project 3", description:"3",link:"/project3"},
    {id:4,title:"Project 4", description:"4",link:"/project4"}
  ]
  return(
    <div className= "DarkerSection">
      <h2 className="oval-bg-light">Previous Projects</h2>
      <div className="project-grid">
        {ProjectList.map((project)=>(
          <div 
            key={project.id}
            className="project-card"
            onClick={()=>window.location.href=project.link}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
        </div>
      </div>
  );
}

function Contact(){
  return(
    <div className="LighterSection">
      <h2 className="oval-bg-dark">Contact Me</h2>
      <a href="mailto:yl23bd@fsu.edu"
      className="oval-bg-dark" 
      >
        <p className="p2">Email Me!</p>
      </a>
      <div>
        <a 
          href="https://github.com/yusongggg17"
          target="_blank"
          rel="noopener noreferrer"
          className="AppButtons"
        >
          {FaGithub ({size:48})}
        </a>

        <a 
          href="https://www.linkedin.com/in/yusong-liang/"
          target="_blank"
          rel="noopener noreferrer"
          className="AppButtons"
        >
          {FaLinkedin ({size:48})}
        </a>

        <a 
          href="https://yusongl.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="AppButtons"
        >
          {FaItchIo ({size:48})}
        </a>

      </div>
    </div>
  );

}
function App() {
  return (
    <>
      <FrontPage />
      <Profile />
      <Projects />
      <Contact/>

    </>
  );
}


export default App;
