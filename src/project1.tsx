import './App.css';
import ProjectsTemplate from './ProjectsTemplate'
import {FaItchIo} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg"
//imported files
import Project1Image1 from './assets/nutriquest.png'
import Project1Image2 from './assets/cookbook(poster).png'
import Project1Image3 from './assets/healthy hero.png'
import Project1Image4 from './assets/Kitchen(cutting board)-UROP poster.png'
import Project1Image5 from './assets/Eating Scene-Poster.png'
import Project1Image6 from './assets/NutriQuest Play Action Map.png'
import Project1Image7 from './assets/NutriQuestPoster.png'
import Project1Image8 from './assets/NutriQuestSymposium.jpeg'
const images=[ 
  {url: Project1Image1, alt: 'NutriQuestCover'},
  {url: Project1Image2, alt: 'CookBook'},
  {url: Project1Image3, alt: 'HealthyHero'},
  {url: Project1Image4, alt: 'Kitchen'},
  {url: Project1Image5, alt: 'EatingScene'},
  {url: Project1Image6, alt: 'PlayActionMap'},
  {url: Project1Image7, alt: 'NutriQuestPoster'},
  {url: Project1Image8, alt: 'SymposiumPhoto'}]

  const links=[
    {url:"https://cre.fsu.edu/research-symposium/17866", icon:CgWebsite},
    {url:"https://yusongl.itch.io/nutriquest-final", icon:FaItchIo}
  ]
function Project1(){
  return(
  <ProjectsTemplate 
    title="Project 1-NutriQuest" 
    description="A serious indie 2D game to promote mindful and intuitive eating."
    images={images}
    links={links} />
  )

}
export default Project1;

