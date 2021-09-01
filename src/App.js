
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'
import './Styles/Portfolio.css';
import Aos from 'aos';
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';

import Ahmed from './Assets/images/Ahmed.png';
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

import PLumia from './Assets/images/projects/Lumia.png';
import PBudget from './Assets/images/projects/Budget.jpg';
import PColorLip from './Assets/images/projects/ColorLip.png';
import PEliteCrop from './Assets/images/projects/EliteCrop.png';
import PMogo from './Assets/images/projects/Mogo.png';
import PPersonal from './Assets/images/projects/Personal.png';
import PPortfolioCard from './Assets/images/projects/PortfolioCard.png';
import PPyramid from './Assets/images/projects/Pyramid.jpg';
import PTrafalgar from './Assets/images/projects/Trafalgar.png';
import PVesperr from './Assets/images/projects/Vesperr.png';
import PTodo from './Assets/images/projects/Todo.jpeg';
import PWpPort from './Assets/images/projects/WordPressPortfolio.png';
import PWpDes from './Assets/images/projects/DesignAgency.png';
import PWpDoc from './Assets/images/projects/DoctorOffice.png';
import PWpBotq from './Assets/images/projects/Boutique.png';
import PWpYgLnd from './Assets/images/projects/YogaLanding.png';
import PWpFada from './Assets/images/projects/Fada.png';
import PWpRlRst from './Assets/images/projects/RoyalRestaurant.png';

import PAbdoSt from './Assets/images/projects/AbdoStore.png';
import PChat from './Assets/images/projects/Chat.png';
import PBall from './Assets/images/projects/BallSort.png';
import PWeather from './Assets/images/projects/WeatherApp.png';

import pen1 from './Assets/images/codepen1.png';
import pen2 from './Assets/images/codepen2.png';
import pen3 from './Assets/images/codepen3.png';
import pen4 from './Assets/images/codepen4.png';

import {FaTrafficLight, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaGithub, FaCodepen} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiSass, SiBootstrap, SiReact, SiWordpress, SiJava, SiMicrosoftsqlserver, SiMysql, SiFigma, SiGmail, SiFirebase } from 'react-icons/si';
import {FiMenu, FiSun, FiMoon} from 'react-icons/fi';
import {AiOutlineSetting} from 'react-icons/ai';
import {GiFamilyTree} from 'react-icons/gi';


import Skill from './Components/Skill';
import Project from './Components/Project';
import Pen from './Components/Pen';
import { menuFun, filterFun, projectsFun, colorMoodFun } from './Plugin';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  const certificatesImages = [ IFiti, IHtml, ICss, IResponsive, IJs, IJquery, IReact, IWordpress, ISql, IJava ];
  const projectsLabel = ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery', 'React', 'Jsx', 'Redux', 'Route', 'DsAlgo', 'Api', 'Firebase', 'Wordpress'];
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
          // data-aos='slide-right' data-aos-delay='50' data-aos-duration='1000'>
          data-aos='fade-down' data-aos-delay='50' data-aos-duration='1000'>
            <div className={'hero__description'}>              
              <h3>Hello, <br/>I am Ahmed Zakaria</h3>
              <p> Front end developer </p>
              <div className={'hero__photo__small'}>
                <img src={Ahmed}  alt='img'/>
              </div>
              <p> 
                I want to be a front-end developer / ui developer / client side developer because this path combines between programming and more creativity on ui features such as color-schemes and wireframing, 
                and I have built a lot of projects that have increased my experience, I am a fast learner and always love to develop myself 
              </p>
              <Button href='https://www.linkedin.com/in/ahmed-zakaria-a554a4183' target='_blank'
                data-aos='fade-down' data-aos-delay='800' data-aos-duration='900'
              ><FaLinkedinIn/></Button>
              <Button href='https://github.com/AhmedZkaria22' target='_blank'
                data-aos='fade-down' data-aos-delay='900' data-aos-duration='1000'
              ><FaGithub/></Button>
              <Button variant="primary" href='https://drive.google.com/file/d/107GRHhCyB3EPz-qSPMMEIWRAFMNFbgR3/view?usp=sharing' target='_blank'
                data-aos='fade-down' data-aos-delay='1000' data-aos-duration='1100' 
              >Resume</Button>
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
        {/* <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'>  SKILLS / </h2> */}
        <h2>  SKILLS / </h2>
        <div className={'skills__container'}
         data-aos='slide-right' data-aos-delay='700' data-aos-duration='1400'>
          <Skill SkillIcon={SiHtml5} SkillName='Html / Html5'/>
          <Skill SkillIcon={SiCss3} SkillName='Css / Css3'/>
          <Skill SkillIcon={SiJavascript} SkillName='Js : basic, dom, bom, oop'/>
          <Skill SkillIcon={SiJquery} SkillName='jQuery'/>
          <Skill SkillIcon={SiSass} SkillName='Sass / Scss'/>
          <Skill SkillIcon={SiBootstrap} SkillName='Bootstrap'/>
          <Skill SkillIcon={SiJavascript} SkillName='Ecma'/>
          <Skill SkillIcon={SiReact} SkillName={`React & Redux & Route`}/>
          <Skill SkillIcon={SiWordpress} SkillName='Wordpress'/>
        </div>

        <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'>  Knowlage </h2>
        <div className={'skills__container'}
          data-aos='slide-right' data-aos-delay='700' data-aos-duration='1400'>
          <Skill SkillIcon={FaTrafficLight} SkillName='Ui Ux'/>
          <Skill SkillIcon={BsSearch} SkillName='Seo'/>
          <Skill SkillIcon={GiFamilyTree} SkillName={`Data Structure & Algorithm`}/>          
          <Skill SkillIcon={SiJava} SkillName='Java'/>
          <Skill SkillIcon={SiMicrosoftsqlserver} SkillName='Sql'/>
          <Skill SkillIcon={SiMysql} SkillName='MySQL'/>
          <Skill SkillIcon={SiFirebase} SkillName='FireBase'/>
        </div>

        <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'>FAMILIAR</h2>
        <div className={'skills__container'}
          data-aos='slide-right' data-aos-delay='700' data-aos-duration='1400'>
          <Skill SkillIcon={SiFigma} SkillName='Figma'/>
        </div>        
      </section>

      <section id="projects">
      {/* <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'> projects / </h2>     */}
      <h2> projects / </h2>
        <AiOutlineSetting className={'projects__filter'}  onClick={filterFun}/>    
        <div className={'projects__filtersWrapper'}>    
          {
            projectsLabel.map( (projLabel, index) => {
              return(
                <Form.Group controlId={`formBasicCheckbox${index+1}`} key={index}>
                  <Form.Check type="checkbox" label={projLabel} onClick={projectsFun}/>
                </Form.Group>
              );
            })
          }
        </div>
        
        <div className={'projects__wrapper'}>
          {/* data-aos='slide-up' data-aos-delay='400' data-aos-duration='1200' data-aos-easing="linear"> */}
            <Project preload={['Lumia Theme', PLumia, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Lumia-Theme/Lumia.html']}/>
            <Project preload={['Vesperr Theme', PVesperr, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Vesperr-Theme/Vesperr.html']}/>
            <Project preload={['Portfolio-card Theme', PPortfolioCard, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Portofolio-Theme/Portfolio.html']}/>
            <Project preload={['EliteCrop Theme', PEliteCrop, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/EliteCrop/EliteCrop.html']}/>
            <Project preload={['Wordpress Portfolio', PWpPort, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/?fbclid=IwAR3WqAQda5_q1iRLcTEy364YWLUliM7v994GIHS_9TDoqTdNjwObG2N_ckY']}/>
            {/* <Project preload={['Design Agency', PWpDes, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/design-agency-landing-page/' , 'code']}/> */}
            <Project preload={['Design Agency', PWpDes, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/design-agency-landing-page/']}/>
            <Project preload={['Doctor’s Office', PWpDoc, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/do-landing/']}/>
            <Project preload={['Boutique Ar-En', PWpBotq, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/boutique-landing/']}/>
            <Project preload={['Fada Clone', PWpFada, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/fada-home/']}/>
            <Project preload={['Yoga Landing', PWpYgLnd, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/yoga-landing/']}/>
            <Project preload={['Royal Returant', PWpRlRst, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/royal-restaurant/']}/>
            <Project preload={['Personal Theme', PPersonal, ['Html', 'Css'], 'https://ahmedzkaria22.github.io/Personal/Index.html']}/>
            <Project preload={['Trafalgar Theme', PTrafalgar, ['Html', 'Css', 'Scss'], 'https://ahmedzkaria22.github.io/Trafalgar/Index.html']}/>
            <Project preload={['Mogo Theme', PMogo, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js'], 'https://ahmedzkaria22.github.io/Mogo/Index.html']}/>
            <Project preload={['ColorLip-app Theme', PColorLip, ['Html', 'Css', 'Scss', 'Responsive', 'Js'], 'https://ahmedzkaria22.github.io/ColorLip/Index.html']}/>            
            <Project preload={['Pyramid Glass Clone', PPyramid, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Pyramid-Glass/Glassware.html']}/>
            <Project preload={['React Todo List', PTodo, ['Css', 'Scss', 'Responsive', 'Js', 'React', 'Jsx'], 'https://ahmedzkaria22.github.io/React-TodoList-2/']}/>
            <Project preload={['Budget Tracker , Photo Grid , Authentication', PBudget, ['Css', 'Responsive', 'Js', 'React', 'Route', 'Jsx', 'Firebase'], 'https://ahmedzkaria22.github.io/React-Firebase/']}/>
            <Project preload={['Abdo Store', PAbdoSt, ['Css', 'Responsive', 'Js', 'React', 'Route', 'Jsx', 'Firebase'], 'https://ahmedzkaria22.github.io/React-ECommerce/']}/>
            <Project preload={['React Chat', PChat, ['Css', 'Scss', 'Responsive', 'Js', 'React', 'Jsx', 'Firebase'], 'https://ahmedzkaria22.github.io/React-Chat/']}/>
            <Project preload={['Ball Sort ', PBall, ['Css', 'Scss', 'Responsive', 'Js', 'React', 'Jsx', 'Redux', 'DsAlgo'], 'https://ahmedzkaria22.github.io/Ball-Sort/']}/>
            <Project preload={['Weather App ', PWeather, ['Css', 'Scss', 'Js', 'React', 'Route', 'Jsx', 'Api'], 'https://ahmedzkaria22.github.io/Weather-App/#/ReactWeatherHome']}/>
        </div>
      </section>

      <section id="certificates">     
      {/* <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'> certificates / </h2>         */}
      <h2> certificates / </h2>
        <Carousel interval={2000} className={"certificates__carousel"}>
            {/* data-aos='zoom-in' data-aos-delay='100' data-aos-duration='800'>  */}
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
      {/* <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'> codepen pens / </h2>
        <p className={'text-muted'} data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'> */}
        <h2> codepen pens / </h2>
        <p>
          some of pens you can see more in profile </p>
        <div className={'pens__wrapper'}>  
        {/* data-aos='slide-up' data-aos-delay='600' data-aos-duration='1200'> */}
          <Pen preload={[pen1, 'Hijri calendar clock', 'https://codepen.io/ahmedzkaria22/pen/GRjpQpN']}/>
          <Pen preload={[pen2, 'Facts counter number using setInterval', 'https://codepen.io/ahmedzkaria22/pen/vYXLmdX']}/>
          <Pen preload={[pen3, 'polygons using border-radius , clip-path-polygon', 'https://codepen.io/ahmedzkaria22/pen/poEJNvQ']}/>
          <Pen preload={[pen4, 'az Plugins dream', 'https://codepen.io/ahmedzkaria22/pen/PoGpdJp']}/>      
        </div>
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
          <a href='https://ahmedzkaria372017@gmail.com' target='_blank' rel="noreferrer"><SiGmail /></a>
        </div>
        <p>© 2021 copyright all right reserved</p>
        <p>made with <span>♥</span> </p>
      </footer>
    </>
  );
}

export default App;
