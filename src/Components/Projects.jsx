import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai';
import { filterFun, handelProjectsFilter } from '../Plugin';
import Project from './Project';

import PLumia from '../Assets/images/projects/Lumia.png';
import PBudget from '../Assets/images/projects/Budget.jpg';
import PColorLip from '../Assets/images/projects/ColorLip.png';
import PEliteCrop from '../Assets/images/projects/EliteCrop.png';
import PMogo from '../Assets/images/projects/Mogo.png';
import PPersonal from '../Assets/images/projects/Personal.png';
import PPortfolioCard from '../Assets/images/projects/PortfolioCard.png';
import PPyramid from '../Assets/images/projects/Pyramid.jpg';
import PTrafalgar from '../Assets/images/projects/Trafalgar.png';
import PVesperr from '../Assets/images/projects/Vesperr.png';
import PTodo from '../Assets/images/projects/Todo.jpeg';
import PWpPort from '../Assets/images/projects/WordPressPortfolio.png';
import PWpDes from '../Assets/images/projects/DesignAgency.png';
import PWpDoc from '../Assets/images/projects/DoctorOffice.png';
import PWpBotq from '../Assets/images/projects/Boutique.png';
import PWpYgLnd from '../Assets/images/projects/YogaLanding.png';
import PWpFada from '../Assets/images/projects/Fada.png';
import PWpRlRst from '../Assets/images/projects/RoyalRestaurant.png';
import { Form } from 'react-bootstrap';

// import PAbdoSt from './Assets/images/projects/AbdoStore.png';
// import PChat from './Assets/images/projects/Chat.png';
// import PBall from './Assets/images/projects/BallSort.png';
// import PWeather from './Assets/images/projects/WeatherApp.png';
// import PNetflix from './Assets/images/projects/Netflix.png';
// import PRevealSkeleton from './Assets/images/projects/ReactReveal&Skeleton.png';
// import PRGrid from './Assets/images/projects/ReactGrid.png';
// import PRCard from './Assets/images/projects/ReactMyCard.png';


function Projects() {
    const projectsLabel = ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery', 'React', 'Jsx', 'Validation', 'Route', 'Redux', 'Redux-Thunk', 'Api', 'DS-Algo', 'Firebase', 'Local-Storage', 'Skeleton', 'Animation', 'Wordpress'];
    return (
        <section id="projects">
        {/* <h2 data-aos='fade-down' data-aos-delay='50' data-aos-duration='700'> projects / </h2>     */}
        <h2> projects / </h2>
          <AiOutlineSetting className={'projects__filter'}  onClick={filterFun}/>    
          <div className={'projects__filtersWrapper'}>    
            {
              projectsLabel.map( (projLabel, index) => {
                return(
                  <Form.Group controlId={`formBasicCheckbox${index+1}`} key={index}>
                    <Form.Check type="checkbox" label={projLabel} onClick={ handelProjectsFilter }/>
                  </Form.Group>
                );
              })
            }
          </div>
          
          <div className={'projects__wrapper'}> 
              <Project preload={['Lumia Theme', PLumia, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Lumia-Theme/Lumia.html', 'https://github.com/AhmedZkaria22/Lumia-Theme']}/>
              <Project preload={['Vesperr Theme', PVesperr, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Vesperr-Theme/Vesperr.html', 'https://github.com/AhmedZkaria22/Vesperr-Theme']}/>
              <Project preload={['Portfolio-card Theme', PPortfolioCard, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Portofolio-Theme/Portfolio.html', 'https://github.com/AhmedZkaria22/Portofolio-Theme']}/>
              <Project preload={['EliteCrop Theme', PEliteCrop, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/EliteCrop/EliteCrop.html', 'https://github.com/AhmedZkaria22/EliteCrop']}/>
              
              <Project preload={['Wordpress Portfolio', PWpPort, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/?fbclid=IwAR3WqAQda5_q1iRLcTEy364YWLUliM7v994GIHS_9TDoqTdNjwObG2N_ckY']}/>
              <Project preload={['Design Agency', PWpDes, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/design-agency-landing-page/']}/>
              <Project preload={['Doctor’s Office', PWpDoc, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/do-landing/']}/>
              <Project preload={['Boutique Ar-En', PWpBotq, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/boutique-landing/']}/>
              <Project preload={['Fada Clone', PWpFada, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/fada-home/']}/>
              <Project preload={['Yoga Landing', PWpYgLnd, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/yoga-landing/']}/>
              <Project preload={['Royal Returant', PWpRlRst, ['Responsive', 'Wordpress'], 'https://90dayschallenges.com/ahmedzakaria/royal-restaurant/']}/>
              
              <Project preload={['Personal Theme', PPersonal, ['Html', 'Css'], 'https://ahmedzkaria22.github.io/Personal/Index.html', 'https://github.com/AhmedZkaria22/Personal']}/>
              <Project preload={['Trafalgar Theme', PTrafalgar, ['Html', 'Css', 'Scss'], 'https://ahmedzkaria22.github.io/Trafalgar/Index.html', 'https://github.com/AhmedZkaria22/Trafalgar']}/>
              <Project preload={['Mogo Theme', PMogo, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery'], 'https://ahmedzkaria22.github.io/Mogo/Index.html', 'https://github.com/AhmedZkaria22/Mogo']}/>
              <Project preload={['ColorLip-app Theme', PColorLip, ['Html', 'Css', 'Scss', 'Responsive', 'Js'], 'https://ahmedzkaria22.github.io/ColorLip/Index.html', 'https://github.com/AhmedZkaria22/ColorLip']}/>            
              <Project preload={['Pyramid Glass Clone', PPyramid, ['Html', 'Css', 'Scss', 'Bootstrap', 'Responsive', 'Js', 'jQuery', 'Validation'], 'https://ahmedzkaria22.github.io/Pyramid-Glass/Glassware.html', 'https://github.com/AhmedZkaria22/Pyramid-Glass']}/>
              <Project preload={['React Todo List', PTodo, ['Css', 'Scss', 'Responsive', 'Js', 'React', 'Jsx', 'Local-Storage'], 'https://ahmedzkaria22.github.io/React-TodoList-2/', 'https://github.com/AhmedZkaria22/React-TodoList-2']}/>
              <Project preload={['Budget Tracker , Photo Grid , Authentication', PBudget, ['Css', 'Responsive', 'Js', 'React', 'Route', 'Jsx', 'Firebase'], 'https://ahmedzkaria22.github.io/React-Firebase/', 'https://github.com/AhmedZkaria22/React-Firebase']}/>
              {/* <Project preload={['Abdo Store', PAbdoSt, ['Css', 'Responsive', 'Js', 'React', 'Route', 'Jsx', 'Firebase'], 'https://ahmedzkaria22.github.io/React-ECommerce/#/ReactEcommerceHome', 'https://github.com/AhmedZkaria22/React-ECommerce']}/>
              <Project preload={['React Chat', PChat, ['Css', 'Scss', 'Responsive', 'Js', 'React', 'Jsx', 'Firebase'], 'https://ahmedzkaria22.github.io/React-Chat/', 'https://github.com/AhmedZkaria22/React-Chat']}/>
              <Project preload={['Ball Sort ', PBall, ['Css', 'Scss', 'Responsive', 'Js', 'React', 'Jsx', 'Redux', 'DS-Algo'], 'https://ahmedzkaria22.github.io/Ball-Sort/', 'https://github.com/AhmedZkaria22/Ball-Sort']}/>
              <Project preload={['Weather App', PWeather, ['Css', 'Scss', 'Js', 'React', 'Route', 'Jsx', 'Api'], 'https://ahmedzkaria22.github.io/Weather-App/#/ReactWeatherHome', 'https://github.com/AhmedZkaria22/Weather-App']}/>
              <Project preload={['Netflix Clone', PNetflix, ['Css', 'Scss', 'Js', 'React', 'Route', 'Redux', 'Redux-Thunk', 'Jsx', 'Api'], 'https://ahmedzkaria22.github.io/React-Netflix-Clone/#/ReactNetflixHome', 'https://github.com/AhmedZkaria22/React-Netflix-Clone']}/>
              <Project preload={['React reveal & Skeleton', PRevealSkeleton, ['Css', 'Scss', 'Js', 'React', 'Jsx', 'React-Reveal', 'Skeleton', 'Animation'], 'https://ahmedzkaria22.github.io/React-Animation-Skeleton/', 'https://github.com/AhmedZkaria22/React-Animation-Skeleton']}/>
              <Project preload={['React Grid', PRGrid, ['Css', 'Css Grid', 'Scss', 'Js', 'React', 'Jsx'], 'https://react-grid-app-a0743.web.app/']}/>
              <Project preload={['React Card', PRCard, ['Css', 'Scss', 'Js', 'React', 'Route', 'Jsx', 'Validation', 'Local-Storage'], 'https://my-card-11ec7.web.app/#/PersonalForm/']}/> */}
          </div>
        </section>
    )
}

export default Projects
