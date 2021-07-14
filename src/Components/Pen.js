import React from 'react'
import { Figure, NavLink, SafeAnchor } from 'react-bootstrap'
// import Icodepen from '../Assets/images/codepen.png'
function Pen({preload}) {
    return (
        <Figure className={'pens__wrapper__item'} as={NavLink} href={preload[2]} target='_blank'>
            <img src={preload[0]} alt='img' />
            <p>{preload[1]}</p>
            {/* <p>description</p> */}
        </Figure>
    )
}

export default Pen
