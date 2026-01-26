import './App.css';
import ProjectsTemplate from './ProjectsTemplate'
import {CgWebsite} from "react-icons/cg"
//imported files
import Project2Image1 from './assets/Prawemit_UIRoom1_5-1536x864.png'
import Project2Image2 from './assets/PrawemitLevelExample.png'
import Project2Image3 from './assets/ResizedAxl.gif'
import Project2Image4 from './assets/BeepskiResized.gif'

const images=[ 
  {url: Project2Image1, alt: 'PrawemitUI'},
  {url: Project2Image2, alt: 'PrawemitLevel'},
  {url: Project2Image3, alt: 'PrawemitAxl'},
  {url: Project2Image4, alt: 'PrawemitBeepski'},
]

  const links=[
    {url:"https://arcvale.com/deployment/prawemit/", icon:CgWebsite}
  ]
function Project2(){
  return(
  <ProjectsTemplate 
    title="Project 2-Prawemit" 
    description="An in-house 2D platformer developed for the Nintendo Switch. 
    The game is a puzzle-platformer in the purest sense, 
    allowing players to swap between characters, each with a distinct playstyle and unique abilities, 
    to complete levels and uncover secrets. 
    Through my work with Arcvale Studio on this project, 
    I was able to apply my Unity 2D skills and gained valuable experience in the game development and debugging process."
    images={images}
    links={links} />
  )
}

export default Project2;