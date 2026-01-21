import './App.css';
import ProjectsTemplate from './ProjectsTemplate'
import { FaItchIo} from "react-icons/fa";
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

// function Project1() {
//   const navigate = useNavigate();
//   const [isHovered,setIsHovered]=useState(false);

//   function jumptoContact(){
//     navigate('/');
//     setTimeout(()=>{
//       const contactSection=document.getElementById('contact-section');
//       if(contactSection){
//         contactSection.scrollIntoView({behavior:'smooth'});
//     }},100);
//   }

//   {/*image scrolling*/}  
//   const [currentIndex, setCurrentIndex] =useState(0);
//   const imagelists=[
//     {id:1, url: Project1Image1, alt: 'NutriQuestCover'},
//     {id:2, url: Project1Image2, alt: 'CookBook'},
//     {id:3, url: Project1Image3, alt: 'HealthyHero'},
//     {id:4, url: Project1Image4, alt: 'Kitchen'},
//     {id:5, url: Project1Image5, alt: 'EatingScene'},
//     {id:6, url: Project1Image6, alt: 'PlayActionMap'},
//     {id:7, url: Project1Image7, alt: 'NutriQuestPoster'},
//     {id:8, url: Project1Image8, alt: 'SymposiumPhoto'},
//   ];

//   function goToPreviousImage(){
//     if(currentIndex===0){
//       setCurrentIndex(imagelists.length-1);
//     }else{
//       setCurrentIndex(currentIndex-1);
//     }
//   }
//   function goToNextImage(){
//     if(currentIndex===imagelists.length-1){
//       setCurrentIndex(0);
//     }else{
//       setCurrentIndex(currentIndex+1);
//     }

//   }

//   return (
//     <div className="ProjectPage">
//       <h1 style={{marginTop:"50px"}}>Project 1 - NutriQuest</h1>
//       <div onMouseEnter={function(){setIsHovered(true);}}
//       onMouseLeave={function(){setIsHovered(false);}}
//       className="ImageContainer"
//       >
//         {/*left arrow */}
//         <button onClick={goToPreviousImage}
//         className="left-arrow">
//           {FaAngleLeft ({size:32})}
//         </button>

//         {/*images */}
//         <div>
//           <img
//             src={imagelists[currentIndex].url}
//             alt={imagelists[currentIndex].alt}
//             className="ProjectImages"
//           />
//         </div>

//         {/*right arrow */}
//         <button onClick={goToNextImage}
//         className="right-arrow">
//           {FaAngleRight ({size:32})}
          
//         </button>
//         {/*<img className= "ProjectImages" src={Project1Image1} alt="NutriQuestCover" />*/}
//       </div>
//       <p className="p2">Image {currentIndex+1} of {imagelists.length}</p>
//       <p className="p1">A serious indie 2D game to promote the practice of mindful eating and intuitive eating
//       </p>
//       <div>
//         <p className="p1" style={{marginBottom:'1.5rem'}}>Related Links to this project</p>
//         <a
//           href="https://cre.fsu.edu/research-symposium/17866"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="AppButtons"
//         >
//           {CgWebsite({size:48})}
//         </a>
//         <a
//           href="https://yusongl.itch.io/nutriquest-final"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="AppButtons"
          
//         >
//           {FaItchIo({size:48})}
//         </a>
//       </div>


//       <div>
//           <button
//               className="contact-button" 
//               style={{marginBottom:'1.5rem', fontSize: '18px', color:'#ffffff', fontFamily: '"Times New Romans", Serif' }}
//               onClick={jumptoContact}>
//                 Contact Me
//           </button>
//       </div>
//     </div>

//   );
//   }
