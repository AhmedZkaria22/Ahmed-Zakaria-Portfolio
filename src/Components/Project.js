import React from 'react'
import { Figure, NavLink } from 'react-bootstrap';
import {RiErrorWarningFill} from 'react-icons/ri';
function Project(props) {
    const {preload} = props;
    return (
        <Figure className={`projects__wrapper__item ${preload[2].toString().replace(/,/g, " ")}`}
            as={NavLink} href={preload[3]}  target='_blank'
            style={ (preload[4]) && {marginBottom: '11rem'}  }
        >
            <div className={'projects__wrapper__item__imgWrapper'}>
                <img src={`${preload[1]}`} alt={`${preload[1]}`} />  
            </div>
            <h5>{
                (preload[4]) ? 
                <>
                    {preload[0]}
                    <RiErrorWarningFill onMouseEnter={ (e) => { e.target.parentElement.nextElementSibling.style.opacity = "1" } }/>                
                </>
                : <>{preload[0]}</>
            }</h5>
            {
                (preload[4]) && <>
                <p> Write this code in console to remove static personal header and footer - 
                    <span>'document.querySelector("header").style.display="none";
                    document.querySelector("footer").style.display="none";'</span>
                </p>
                </>
            }
        </Figure>
    )
}

export default Project
