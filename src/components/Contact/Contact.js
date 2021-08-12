import React, { Component } from 'react'
import './Contact.css'
import contact from './../../assets/images/contact.png'
// import picture from './../../assets/images/tomi.jpg'


export default class Contact extends Component {
    render() {
        return (
                <div className="all">
               
                
                <div className="aboutMe">
                {/* <img src={picture} alt="tomirojo"></img> */}
                
                    <h3>About Me</h3>
                    <p>Hello. My name is Tomás and if there is something I hate more than self-praise, it is falling into cliché or hackneyed phrases. However, this does not mean that something ceases to be true, therefore, it is with some discomfort that if I had to choose a word to describe myself it would be "passionate"; The passion and inclination to give my best covers every aspect of my life, from the simplest tasks, such as changing a light bulb or mounting a shelf, to more complex tasks such as programming. This passion is constantly fueled by the very nature of programming: a discipline where there is always something new to learn, where work alone constantly motivates you to want to improve.</p>
                </div>
                <div className="contactContainer">
                    <div className="contactHeader">
                <img id="contactLogo" src={contact} alt="aliencontact"/>
                <h1>Contact</h1>
                    </div>
                    
                    <div className="socialmediacontainer">
                    <p>Contact me directly</p>
                    <p><img src="https://img.icons8.com/fluency/48/000000/gmail.png" alt="gmail"/> Email: tom.roj.laboral@gmail.com </p>
                    <p> <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="lindedin"/> LinkedIn: <a href="https://linkedin.com/in/tomás-rojo-38743a214" target="_blank" rel="noreferrer">https://linkedin.com/in/tomás-rojo-38743a214</a> </p>
                
                    </div>
                    <p id="advice">To go back, click on the ufo</p>
                </div>
                </div>
                
    
        )
    }
}
