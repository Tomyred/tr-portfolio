import React, { useState } from 'react'
import './Frontpage.css';
import ufoLogo from'./../assets/images/ufoLogo.png'
import ufoLogoBg from'./../assets/images/ufoLogoBg.png'
import Resume from'./../assets/docs/resume.pdf'

import Main from './Main/Main'
import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom'
import Contact from './Contact/Contact';

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
                <Link className="navbarItem" to="/contact/">Contact</Link>
                    
                </header>
           <Switch>
               <Route path="/" exact>
                   <Redirect to="/tr-portfolio"/>
               </Route>
               <Route path="/tr-portfolio">
            <Main></Main>
               </Route>
               <Route path="/contact/">
            <Contact></Contact>
               </Route>
               <Route path="**">
                   <Redirect to="/tr-portfolio"/>
               </Route>
           </Switch>
            </Router>
    )
}

