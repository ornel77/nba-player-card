import React from 'react'
import curry from '../curry.png'
import logo from '../logo-warriors.png'
const Curry = () => {
  return (
    <article id='curry-card'>
        <div className="img-container">
            <img src={curry} alt="" className='profile-picture'/>
        </div>
        <div className="description desc-curry">
            <img src={logo} alt="" className="logo" />
            {/* <p className="infos team">Dallas Mavericks</p> */}
            <p className="infos name">Stephen Curry</p>
            <p className="infos number">#30</p>
            <p className="infos post">Point Guard</p>
            {/* <p className="infos height">Height: 6.3</p> */}
            {/* <p className="infos age">Age: 35 years old</p> */}
            {/* <p className="infos country">Country: USA</p> */}

        </div>
    </article>
  )
}

export default Curry