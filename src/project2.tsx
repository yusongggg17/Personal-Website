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
    description="An in-house 2D platformer game for Nintendo Switch platform."
    images={images}
    links={links} />
  )
}

export default Project2;