import './App.css';
import ProjectsTemplate from './ProjectsTemplate'
import {CgWebsite} from "react-icons/cg"
import { FaItchIo} from "react-icons/fa";
//imported files
import Project4Image1 from './assets/ChefofTheForest.png'
import Project4Image2 from './assets/ChefOfTheForestPlaying.png'
import Project4Image3 from './assets/VRRoom.png'
import Project4Image4 from './assets/buggingout.webp'

const images=[ 
  {url: Project4Image1, alt: 'ChefOfTheForestCover'},
  {url: Project4Image2, alt: 'ChefOfTheForestPlaying'},
  {url: Project4Image3, alt: 'VRRoom'},
  {url: Project4Image4, alt: 'buggingout'},
]

  const links=[
    {url:"https://yusongl.itch.io/chef-of-the-forest", icon:FaItchIo},
    
  ]
function Project4(){
  return(
  <ProjectsTemplate 
    title="Other Projects" 
    description="I also have many additional personal projects, 
    including 3D game jam projects, VR experiences, 
    and various course-related assignments. More projects are always in progress."
    images={images}
    links={links} />
  )
}

export default Project4;