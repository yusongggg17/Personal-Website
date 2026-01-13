import './App.css';
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
    <div className="ProfileSection">
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

function App() {
  return (
    <>
      <FrontPage />
      <Profile />
      <Projects />

    </>
  );
}


export default App;
