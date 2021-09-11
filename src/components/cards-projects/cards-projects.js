import React from 'react'
// import media from '../../assets/images/media.png'
import facebook from '../../assets/images/facebook.png'
import cardForm from '../../assets/images/card-form.png'
// import darkMode from '../../assets/images/dark-mode.png'
import './cards-projects.css'

function cardsprojects() {
    return (
        <div className="component-container">
            <h2>Some of my projects</h2>
            <hr></hr>
            <div className="cards-container">
            <div className="card">
          <img src={cardForm} alt="dynamic-card-form"/>
          <h4>Credit card form</h4>
          <p>A dynamic card form with 3d animations that can be used for e-commerce</p>
          <a href="https://tomyred.github.io/dinamic-card-form/">Take a look</a>
          </div>
          <div className="card">
          <img src={facebook} alt="facebook"/>
          <h4>Facebook clone</h4>
          <p>A Facebook clone with Google Authentication and realtime Firestore DB. Leave a comment!</p>
          <a href="https://copybook-df803.web.app/">Take a look</a>
          </div>
          {/* <div className="card">
          <img src={darkMode} alt="dark-mode"/>
          <h4>Theme toggler</h4>
          <p>A simple page with dynamic theme change by clicking on the sun and the moon</p>
          <a href="https://tomyred.github.io/Dark-mode/">Take a look</a>
          </div> */}
          {/* <div className="card">
          <img src={media} alt="media"/>
          <h4>Media finder</h4>
          <p>A multimedia content search engine (movies, shows, books, etc)</p>
          
          <a href="https://media-finder-75b62.web.app/">Take a look</a>
          </div> */}
          </div>
        </div>
    )
}

export default cardsprojects
