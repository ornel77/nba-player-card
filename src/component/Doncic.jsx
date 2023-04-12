import React from 'react'
import luka from '../luka1.png'
import logo from '../logo.png'
const Doncic = () => {
  return (
    <article>
        <div className="img-container">
            <img src={luka} alt="" className='profile-picture'/>
        </div>
        <div className="description">
            <img src={logo} alt="" className="logo" />
            {/* <p className="infos team">Dallas Mavericks</p> */}
            <p className="infos name">Luka Doncic</p>
            <p className="infos number">#77</p>
            <p className="infos post">Small Forward</p>
            {/* <p className="infos height">Height: 6.7</p> */}
            {/* <p className="infos age">Age: 24 years old</p> */}
            {/* <p className="infos country">Country: Slovenia</p> */}

        </div>
    </article>
  )
}

export default Doncic