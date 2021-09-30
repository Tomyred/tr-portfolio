import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom'

import './Frontpage.css';

import ufoLogo from'./../assets/images/ufoLogo.png'
import ufoLogoBg from'./../assets/images/ufoLogoBg.png'
import Resume from'./../assets/docs/tomroj-resume.pdf'

import Main from './Main/Main'
import Aboutme from './about-me/Aboutme.js'

export const FrontPage = () => {

    const [Logo, setLogo] = useState(ufoLogo)
    
    const [handleLogo, sethandleLogo] = useState(true)

    const handleMouseEnter = () => {
        sethandleLogo(!handleLogo)
        if(handleLogo){
            setLogo(ufoLogoBg)  
        }else{
        setLogo(ufoLogo)
        }
    }

    return (
         <Router>
                <header className="navbar">
   
                <a href={Resume} className="navbarItem" download="resume">Download Resume</a>
                
                <Link className="mainlink" to="/tr-portfolio">
                    <figure className="forbg">
                        
                        <img className="logo"
                        onMouseLeave={handleMouseEnter} 
                        onMouseEnter={handleMouseEnter} 
                        src={Logo} 
                        alt="ufologo"></img>
                </figure>
                </Link>
                <Link className="navbarItem" to="/aboutme">About me</Link>
                    
                </header>
           <Switch>
               <Route path="/" exact>
                   <Redirect to="/tr-portfolio"/>
               </Route>
               <Route path="/tr-portfolio">
            <Main></Main>
               </Route>
               <Route path="/aboutme">
            <Aboutme/>
               </Route>
               <Route path="**">
                   <Redirect to="/tr-portfolio"/>
               </Route>
           </Switch>

            </Router>
    )
}

