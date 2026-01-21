import './App.css';
import ProjectsTemplate from './ProjectsTemplate'
import {CgWebsite} from "react-icons/cg"
import { FaItchIo} from "react-icons/fa";
//imported files
import Project3Image1 from './assets/SpiderSolCover.png'
import Project3Image2 from './assets/SpiderSol1.png'
import Project3Image3 from './assets/SpiderSol2.png'
import Project3Image4 from './assets/HorrorGameJamPhoto.jpg'

const images=[ 
  {url: Project3Image1, alt: 'SpiderSolCover'},
  {url: Project3Image2, alt: 'SpiderSolLevelExample1'},
  {url: Project3Image3, alt: 'SpiderSolLevelExample2'},
  {url: Project3Image4, alt: 'FSUDevlUpHorrorGameJam25Photo'},
]

  const links=[
    {url:"https://jdevo.itch.io/spidersol", icon:FaItchIo},
    {url:"https://news.fsu.edu/news/science-technology/2025/10/31/florida-state-university-innovation-hub-sparks-creativity-through-hands-on-student-challenges/",icon:CgWebsite}
  ]
function Project3(){
  return(
  <ProjectsTemplate 
    title="Project 2 - SpiderSol" 
    description="An 48-hours gamejam 2D game. "
    images={images}
    links={links} />
  )
}

export default Project3;