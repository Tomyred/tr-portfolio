import React, { Component } from 'react'
import './Main.css';
import Cardsprojects from '../cards-projects/cards-projects';

export default class Main extends Component {
    render() {
        return (
            <div className="bigcontainer">
            <div className="presentation">
            <h1>Hi! <br/> 
                I´m
                <strong> Tomás Rojo Junior Frontend Developer</strong> with great passion for learning and teamwork </h1>
            </div>
            <div className="techContainer">
            <div className="technologies">
                <p id="title">Technologies i work with</p>
               <div className="iconsContainer">
                <p>HTML5<img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5"/> </p>
                <p>CSS3<img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS"/> </p>
                <p>JavaScript<img src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript"/> </p>
                <p>React<img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react"/> </p>
                <p>Angular<img src="https://img.icons8.com/color/48/000000/angularjs.png" alt="angular"/> </p>
                <p>SQL<img src="https://img.icons8.com/color/48/000000/sql.png" alt="sql"/> </p>
                <p>Bootstrap <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="bootstrap"></img></p>
                {/* <p>SASS<img src="https://img.icons8.com/color/48/000000/sass.png" alt="sass"></img></p> */}
                <p>Git <img src="https://img.icons8.com/color/48/000000/git.png" alt="git"/></p>
                <p>Github <img src="https://img.icons8.com/color/48/000000/github.png" alt="github"/></p>
                </div> 
            </div>
            </div>
            <Cardsprojects></Cardsprojects>
            </div>
        )
    }
}
