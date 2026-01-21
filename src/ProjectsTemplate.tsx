import './App.css';
import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import type { IconType } from "react-icons";
import ImageCarousel from './ImageCarousel';

type image={
  url:string;
  alt:string;
}

type ProjectsTemplateProps={
  title:string;
  description:string;
  images:image[];
  links:{
    url:string;
    icon?:IconType;
  }[];
}
function ProjectsTemplate({title,description,images,links}:ProjectsTemplateProps){
    //Contact Button navigation
    const navigate = useNavigate();
    const [isHovered,setIsHovered]=useState(false);
  
    function jumptoContact(){
      navigate('/');
      setTimeout(()=>{
        const contactSection=document.getElementById('contact-section');
        if(contactSection){
          contactSection.scrollIntoView({behavior:'smooth'});
      }},100);
    }

    return(
        <div className="ProjectPage">
          <h1 style={{marginTop:"50px"}}>{title}</h1>
          <div>
            <ImageCarousel images={images} />
          </div>
          <p className="p1">{description}</p>
          <div>
            <p className="p1" style={{marginBottom:'1.5rem'}}>Related Links to this project</p>
            {links.map((link,index)=>{
              const Icon = link.icon as React.ComponentType<{ size: number }>;
              return(
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="AppButtons"
                  >
                   {Icon && <Icon size={48} />}
                </a>
              );
            })}

          </div>
          <button
          className="contact-button" 
          style={{marginBottom:'1.5rem', fontSize: '18px', color:'#ffffff', fontFamily: '"Times New Romans", Serif' }}
          onClick={jumptoContact}>
              Contact Me
          </button>
        </div>
    );
}
export default ProjectsTemplate;