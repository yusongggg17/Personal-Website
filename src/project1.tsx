import './App.css';
import {useNavigate} from 'react-router-dom'

//imported files
import Project1Image1 from './assets/nutriquest.png'
import Project1Image2 from './assets/cookbook(poster).png'
import Project1Image3 from './assets/healthy hero.png'

function Project1() {
  const navigate = useNavigate();

  function jumptoContact(){
    navigate('/');
    setTimeout(()=>{
      const contactSection=document.getElementById('contact-section');
      if(contactSection){
        contactSection.scrollIntoView({behavior:'smooth'});
    }},100);
  }

  return (
    <div className="ProjectPage">
      <h1 style={{marginTop:"50px"}}>Project 1 - NutriQuest</h1>
      <img className= "ProjectImages" src={Project1Image1} alt="NutriQuestCover" />
      <p className="p1">A serious indie 2D game to promote the practice of mindful eating and intuitive eating
      </p>
      <div>
          <button
              className="contact-button" 
              style={{marginTop:'2rem', fontSize: '18px', color:'#ffffff', fontFamily: '"Times New Romans", Serif' }}
              onClick={jumptoContact}>
                Contact Me
          </button>
      </div>
    </div>

  );
  }

export default Project1;