import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Portfolio.css';
import IHtml from './Assets/images/certificates/CHtml.jpg';
import ICss from './Assets/images/certificates/CCss.jpg';
import IResponsive from './Assets/images/certificates/CResponsive.jpg';
import IJs from './Assets/images/certificates/CJavaScript.jpg';
import IJquery from './Assets/images/certificates/CJquery.jpg';
import IReact from './Assets/images/certificates/CReact.jpg';
import ISql from './Assets/images/certificates/CSql.jpg';
import IJava from './Assets/images/certificates/CJava.jpg';
import IFiti from './Assets/images/certificates/CFiti.jpg';
import IWordpress from './Assets/images/certificates/CWordpress.jpg';

import Ahmed from './Assets/images/Ahmed.png';
import pen1 from './Assets/images/codepen1.png';
import pen2 from './Assets/images/codepen2.png';
import pen3 from './Assets/images/codepen3.png';
import pen4 from './Assets/images/codepen4.png';


import { projectsData } from './Components/ProjectsData';
import { menuFun, filterFun, colorMoodFun, handelProjectsFilter } from './Plugin';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Pen from './Components/Pen';
import WriteTestimonial from './Components/WriteTestimonial';

import {FaTrafficLight, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaGithub, FaCodepen} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiSass, SiBootstrap, SiReact, SiWordpress, SiJava, SiMicrosoftsqlserver, SiMysql, SiFigma, SiGmail, SiFirebase, SiRedux } from 'react-icons/si';
import {FiMenu, FiSun, FiMoon} from 'react-icons/fi';
import {GoBold} from 'react-icons/go';
import {GiFamilyTree} from 'react-icons/gi';
import {VscJson} from 'react-icons/vsc';
import {DiGit} from 'react-icons/di';
import cvFile from './Assets/AhmedZakariaCV.pdf';
import {HiDownload} from 'react-icons/hi';
// import { Link } from 'react-router-dom';


function App() {
    useEffect(() => {
        Aos.init({});
      }, []);
    const certificatesImages = [ IFiti, IHtml, ICss, IResponsive, IJs, IJquery, IReact, IWordpress, ISql, IJava ];    
    // const latestPojs = projectsData.filter( (item, i) => i >= (projectsData.length - 6) );
    const latestPojs = projectsData;

    // const [wd, setWd] = useState(document.body.clientWidth);
    // window.addEventListener('resize', ()=>{ setWd(document.body.clientWidth); });

    // const handelHeadDelay = (ht2, ht3, ht4, ht5, ht6, sectionName) => {    
    //     const fnlhts = ht2 + ht3 + ht4 + ht5 + ht6 - 52 ;
    //     if( window.scrollY >= fnlhts ){ 
    //     document.querySelector(`#${sectionName} h2`).style.opacity = '1';      
    //     document.querySelector(`#${sectionName} h2`).style.animationName = `sectionHead` ;
    //     }
    // }

    // if( window.location.href.slice( window.location.href.lastIndexOf('/')+1 ) === 'projects' ){
    //     document.removeEventListener('scroll', ()=>{});
    // }else{
        // document.addEventListener('scroll', () => {
        //     const ht2 = document.querySelector('#hero').offsetHeight ,
        //     ht3 = document.querySelector('#skills').offsetHeight,
        //     ht4 = document.querySelector('#projects').offsetHeight,
        //     ht5 = document.querySelector('#certificates').offsetHeight,
        //     ht6 = document.querySelector('#pens').offsetHeight;

        //     handelHeadDelay(ht2,0,0,0,0, 'skills');
        //     handelHeadDelay(ht2,ht3,0,0,0, 'projects');
        //     handelHeadDelay(ht2,ht3,ht4,0,0, 'certificates');
        //     handelHeadDelay(ht2,ht3,ht4,ht5,0, 'pens');
        //     handelHeadDelay(ht2,ht3,ht4,ht5,ht6, 'feedback');
        // });
    // }


    return (
      <>
        <header>
          <h1> <strong>Ahmed</strong> Zakaria</h1>
          <div className={'header__menuBtn'} onClick={ menuFun }>
            <FiMenu />
          </div>
          <div className={'header__colorMoodWrapper'}>
            <FiSun className={'header__colorMoodWrapper__sun'} onClick={colorMoodFun}/>
            <FiMoon className={'header__colorMoodWrapper__moon'} onClick={colorMoodFun}/>
          </div>
  
          <div className={'header__menu'}>
            <a href="#hero"> About </a>
            <a href="#skills"> Skills </a>
            <a href="#projects"> Projects </a>
            <a href="#certificates"> Certificates </a>
            <a href="#pens"> Pens </a>
          </div>
        </header>
  
        <Container id="hero">
          <Row>
          <Col lg={7} md={7} sm={12} 
            data-aos='fade-down' data-aos-delay='50' data-aos-duration='1000'>
              <div className={'hero__description'}>              
                <h3>Hello, <br/>I am Ahmed Zakaria</h3>
                <p> Front end developer </p>
                <div className={'hero__photo__small'}>
                  <img src={Ahmed}  alt='img'/>
                </div>
                <p>
                  Iam a front-end developer,  seeking a job opportunity to increase my experience, skills and passion
                  , excited to work with team, I have built a lot of projects that have increased my experience
                  , I am a fast learner and always love to develop myself
                </p>
                <Button href='https://www.linkedin.com/in/ahmed-zakaria-a554a4183' target='_blank'
                  data-aos='fade-down' data-aos-delay='800' data-aos-duration='900'
                ><FaLinkedinIn/></Button>
                <Button href='https://github.com/AhmedZkaria22' target='_blank'
                  data-aos='fade-down' data-aos-delay='900' data-aos-duration='1000'
                ><FaGithub/></Button>
                <a href={cvFile}  className='btn'  download data-aos='fade-down' data-aos-delay='1000' data-aos-duration='1100'>  Resume  <HiDownload /> </a>
              </div>
            </Col>
  
            <Col lg={5} md={5} sm={8}
              data-aos='zoom-in' data-aos-delay='500' data-aos-duration='1100'>
              <div className={'hero__photo'}>
                <img src={Ahmed}  alt='img'/>
              </div>
            </Col>
          </Row>        
        </Container>
  
        <section id="skills">        
          <h2>  SKILLS / </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={SiHtml5} SkillName='Html / Html5'/>
            <Skill SkillIcon={SiCss3} SkillName='Css / Css3'/>
            <Skill SkillIcon={SiJavascript} SkillName='Js : basic, dom, bom, oop'/>
            <Skill SkillIcon={SiJquery} SkillName='jQuery'/>
            <Skill SkillIcon={SiSass} SkillName='Sass / Scss'/>
            <Skill SkillIcon={SiBootstrap} SkillName='Bootstrap'/>
            <Skill SkillIcon={SiJavascript} SkillName='Ecma'/>
            <Skill SkillIcon={SiReact} SkillName={`React & Redux & Route`}/>
            <Skill SkillIcon={SiReact} SkillIcon2={GoBold} SkillName={`React Bootstrap`}/>
            <Skill SkillIcon={SiRedux} SkillName='ٌRedux Thunk'/>
            <Skill SkillIcon={SiWordpress} SkillName='Wordpress'/>
          </div>
  
          <h2>  Knowlage </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={DiGit} SkillName='Git / Github'/>
            <Skill SkillIcon={VscJson} SkillName='Api'/>
            <Skill SkillIcon={SiFirebase} SkillName='FireBase'/>
            <Skill SkillIcon={FaTrafficLight} SkillName='Ui Ux'/>          
            <Skill SkillIcon={BsSearch} SkillName='Seo'/>          
          </div>
  
          <h2>  Fundimental </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={GiFamilyTree} SkillName={`Data Structure & Algorithm`}/>
            <Skill SkillIcon={SiJava} SkillName='Java'/>
            <Skill SkillIcon={SiMicrosoftsqlserver} SkillName='Sql'/>
            <Skill SkillIcon={SiMysql} SkillName='MySQL'/>
          </div>
  
          <h2>  FAMILIAR </h2>
          <div className={'skills__container'}>
            <Skill SkillIcon={SiFigma} SkillName='Figma'/>
          </div>        
        </section>
  
        <section id="projects">
        <h2> Projects / </h2>          
          <div className={'projects__wrapper'}> 
            {
                latestPojs.map( (prj, i) => { return(
                      <Project key={i} preload={[prj.PrjTitle, prj.PrjImg, prj.PrjTechs, prj.PrjPreview, prj.PrjGithub]}/>
                ) } )
            }
          </div>
          
          {/* <Link to="/Projects">See more <span>25</span> project</Link>  */}
        </section>
  
        <section id="certificates">     
        <h2> certificates / </h2>
          <Carousel interval={2000} className={"certificates__carousel"}>
            {
              certificatesImages.map( (certImg, index) => {
                return(
                <Carousel.Item key={index}>
                  <img className="d-block w-100"  src={`${certImg}`}   alt={`${index+1} slide`} />
                </Carousel.Item>
                );
              })
            }
          </Carousel>
        </section>
  
        <section id="pens">
          <h2> codepen pens / </h2>
          <p>
            some of pens you can see more in profile </p>
          <div className={'pens__wrapper'}>  
            <Pen preload={[pen1, 'Hijri calendar clock', 'https://codepen.io/ahmedzkaria22/pen/GRjpQpN']}/>
            <Pen preload={[pen2, 'Facts counter number using setInterval', 'https://codepen.io/ahmedzkaria22/pen/vYXLmdX']}/>
            <Pen preload={[pen3, 'polygons using border-radius , clip-path-polygon', 'https://codepen.io/ahmedzkaria22/pen/poEJNvQ']}/>
            <Pen preload={[pen4, 'az Plugins dream', 'https://codepen.io/ahmedzkaria22/pen/PoGpdJp']}/>      
          </div>
        </section>
  
        <section id='feedback'>
          <h2> Awesome Vision / </h2>
          <WriteTestimonial />
        </section>
  
        <footer className={'text-center'}>
          <h3> Ahmed Zakaria </h3>
          <div className={'footer__socialWrapper'}>
            <a href='https://www.facebook.com/profile.php?id=100009428856148' target='_blank' rel="noreferrer"><FaFacebookF /></a>
            <a href='https://twitter.com/AhmedZkaria15' target='_blank' rel="noreferrer"><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/ahmed-zakaria-a554a4183' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>                
            <a href='https://github.com/AhmedZkaria22' target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href='https://codepen.io/ahmedzkaria22' target='_blank' rel="noreferrer"><FaCodepen /></a>
            <a href='https://www.pinterest.com/zikoser/_saved/' target='_blank' rel="noreferrer"><FaPinterest /></a>
            <a href='mailto:ahmedzkaria372017@gmail.com' target='_blank' rel="noreferrer"><SiGmail /></a>
          </div>
          <p>© 2021 copyright all right reserved</p>
          <p>made with <span>♥</span> </p>
        </footer>

        {/* <button onClick={() => {
          window.scrollTo(0,0);
        }}>Up</button> */}
      </>
    );
  }

export default App
