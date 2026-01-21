import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';
import { FaEnvelope, FaGithub, FaLinkedin , FaItchIo} from "react-icons/fa";
//import Assets files
import Headshot from './assets/Professional_Headshot_Yusong_Liang_croped.jpeg';

function FrontPage() {
  function scrollToContact(){
    const contactSection=document.getElementById('contact-section');
    if(contactSection){
      contactSection.scrollIntoView({behavior:'smooth'});
    }
  }
  return (
      <div className="DarkerSection">
        <h1>Yusong Liang</h1>
        <h2 style={{color:'#ffffff'}}> Game Developer | Research Assistant </h2>
        <button 
          className="contact-button" 
          style={{marginTop:'2rem', fontSize: '18px', color:'#ffffff', fontFamily: '"Times New Romans", Serif' }}
          onClick={scrollToContact}
        >
          Contact Me
        </button>
      </div>
  );
}

function Profile(){
  return(  
    <div className="LighterSection">
      <h2 className="oval-bg" style={{color:'#8d6700'}}>About Me</h2>
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
    {id:1,title:"Project 1", description:"1",link:"/Project1"},
    {id:2,title:"Project 2", description:"2",link:"/Project2"},
    {id:3,title:"Project 3", description:"3",link:"/Project3"},
    {id:4,title:"Project 4", description:"4",link:"/Project4"}
  ]
  return(
    <div className= "DarkerSection">
      <h2 className="oval-bg" style={{color:'#8d6700'}}>Previous Projects</h2>
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
    <div className="LighterSection" id="contact-section">
      <h2 className="oval-bg" style ={{color: '#8d6700'}}>Contact Me</h2>
        <p className="p1">Please feel free to contact me at any time. I look forward to working with you! </p>
      <div>
        <a 
          href="mailto:yl23bd@fsu.edu"
          className="AppButtons"
        >
          {FaEnvelope ({size:48})}
        </a>
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <FrontPage />
            <Profile />
            <Projects />
            <div id="contact-section">
              <Contact/>
            </div>
          </>
        }/>
        <Route path="/project1" element={<Project1 />}/>
        <Route path="/project2" element={<Project2 />}/>
        <Route path="/project3" element={<Project3 />}/>
        <Route path="/project4" element={<Project4 />}/>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
