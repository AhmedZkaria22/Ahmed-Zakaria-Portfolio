import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Project from './Project';
import { projectsData } from './ProjectsData';
import {IoIosArrowRoundBack} from 'react-icons/io';
import { menuFun, filterFun, colorMoodFun, handelProjectsFilter } from '../Plugin';
import {FiMenu, FiSun, FiMoon} from 'react-icons/fi';

function Projects() {
    const projectsFilter = ['All', 'Bootstrap', 'Responsive', 'jQuery', 'React', 'Validation', 'Api', 'Firebase', 'Animation', 'Wordpress'];
    const [projSt, setProjSt] = useState(projectsData);
    const handelMenuItem = (e, String) => {
      const btnVal = String;      
      const menuBtns = document.querySelectorAll('.projects_menu button');
      for(let i=0; i<menuBtns.length; i++){
        if( menuBtns[i] === e.target ){  
          e.target.classList.add('menuItemActive');
        }else{ menuBtns[i].classList.remove('menuItemActive'); }
      }
      if( btnVal !== 'All' ){
        setProjSt( projectsData.filter( (item) => item.PrjTechs.indexOf(btnVal) !== -1 ) );
      }else{ setProjSt( projectsData ); }      
    }

    // if( window.location.href.slice( window.location.href.lastIndexOf('/')+1 ) === 'projects' ){
    //   document.removeEventListener('scroll', ()=>{});
    // }

    return (
      <>
        <header>
          <h1> <strong>Ahmed</strong> Zakaria</h1>
          <div className={'header__colorMoodWrapper'} style={{marginRight: '1.5rem'}}>
            <FiSun className={'header__colorMoodWrapper__sun'} onClick={colorMoodFun}/>
            <FiMoon className={'header__colorMoodWrapper__moon'} onClick={colorMoodFun}/>
          </div>
        </header>

        <section id="projects" className='projects-page'>
          <h2> projects 
            <Link to="/"> <IoIosArrowRoundBack /> </Link>
          </h2>          
          <div className={'projects_menu'}>{
            projectsFilter.map( (proj, i) => {  return(
              (i === 0) 
              ? <button key={i} className='menuItemActive' onClick={(e) => handelMenuItem(e, `${proj}`)} >{proj}</button>  
              : <button key={i} onClick={(e) => handelMenuItem(e, `${proj}`)} >{proj}</button>
            ) 
          } )
          }</div>

          <div>            
            <div className={'projects__wrapper'}>{
              projSt.map( (prj, i) => { return(
                    <Project key={i} preload={[prj.PrjTitle, prj.PrjImg, prj.PrjTechs, prj.PrjPreview, prj.PrjGithub]}/>
              ) } )
            }</div>
          </div>
        </section>
      </>
    )
}

export default Projects
