import React from 'react'
import media from '../../assets/images/media.png'
import facebook from '../../assets/images/facebook.png'
import './cards-projects.css'
function cardsprojects() {
    return (
        <div className="component-container">
            <h2>Some of my projects</h2>
            <hr></hr>
            <div className="cards-container">
        <div className="card">
          <img src={media} alt="media"/>
          <h4>Media finder</h4>
          <p>A multimedia content search engine with low self-esteem</p>
          <br></br>
          <a href="">Take a look</a>
          </div>
          <div className="card">
          <img src={facebook} alt="facebook"/>
          <h4>Facebook clone</h4>
          <p>A Facebook clone with characters of science fiction literature</p>
          <a href="">Take a look</a>
          </div>
          <div className="card">
          <img src=""/>
          <h4>Dynamic Form for credit card</h4>
          <p></p>
          <a href="">Take a look</a>
          </div>
          </div>
        </div>
    )
}

export default cardsprojects
