import React, { Component } from 'react'
import './Frontpage.css';
import Logo from'./../assets/images/ufoLogo.png'
import Resume from'./../assets/docs/resume.pdf'

import Main from './Main/Main'
import { BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom'
import Contact from './Contact/Contact';

export default class Frontpage extends Component {
    render() {
        return (
            <Router>
                <header className="navbar">
   
                <a href={Resume} className="navbarItem" download="resume">Download Resume</a>
                
                <Link className="mainlink" to="/">
                    <figure >
                        
                        <img className="logo" src={Logo} alt="ufologo"></img>
                </figure>
                </Link>
                <Link className="navbarItem" to="/contact">Contact</Link>
                    
                </header>
           <Switch>
               <Route path="/">
            <Main></Main>
               </Route>
               <Route path="/contact">
            <Contact></Contact>
               </Route>
               <Route path="**">
                   <Redirect to="/"/>
               </Route>
           </Switch>
            </Router>
        )
    }
}
