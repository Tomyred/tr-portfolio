import React from 'react'
import media from '../../assets/images/media.png'
import facebook from '../../assets/images/facebook.png'
import cardForm from '../../assets/images/card-form.png'
import crypto from '../../assets/images/crypto.png'
import './cards-projects.css'
import Contact from '../Contact/Contact'

function cardsprojects() {
    return (
      <div>
        <div className="component-container" id='cards'>
            <h2>Some of my projects</h2>
            <p> (More in GitHub repository)</p>
            <hr></hr>
            <div className="cards-container">

            <div className="card">
            <a href="https://tomyred.github.io/dinamic-card-form/" target="_blank" rel="noreferrer"> 
            <img src={cardForm} alt="dynamic-card-form"/>
            <h4>Credit card form</h4>
            <p className="description">A dynamic card form with 3d animations that can be used for e-commerce</p>
            </a>
          </div>

          <div className="card">
            <a href="https://copybook-df803.web.app/" target="_blank" rel="noreferrer">  
            <img src={facebook} alt="facebook"/>
            <h4>Facebook clone</h4>
            <p className="description">A Facebook clone with Google Authentication and realtime Firestore DB. Leave a comment!</p>
            </a>
          </div>

          <div className="card">
          <a href="https://affectionate-bell-7e3879.netlify.app/" target="_blank" rel="noreferrer"><img src={crypto} alt="crypto"/>
          <h4>Cryptocurrency prices</h4>
          <p>Bootstrap interface of current cryptocurrency prices using the Coingecko api</p>
          </a>
          </div> 

          <div className="card">
          <a href="https://youthful-yonath-701a94.netlify.app/" target="_blank" rel="noreferrer"><img src={media} alt="media"/>
          <h4>Media finder</h4>
          <p>A multimedia content search engine (movies, shows, books, etc) using OMDB API and Bootstrap</p>
          </a>
          </div>
          </div>
        </div>
        <Contact/>
        </div>
    )
}

export default cardsprojects
