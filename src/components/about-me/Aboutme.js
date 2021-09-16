import React, { useState } from 'react'
import './aboutme.css'
import photo from '../../assets/images/photo.jpg'
import { englishText, textoEspañol} from '../../assets/docs/presentation'

const Aboutme = () => {

    const [Toggler, setToggler] = useState(true)

    return (
        <div className="aboutMeContainer">
            <div className="aboutMe">
                    <h2>About Me</h2>
                    <div className="pres">
                   <div className="aboutMe-top">

                       <div className="imageContainer">
                           <img className="photo" src={photo} alt="tomyred"/>
                       </div>
                       
                    <div className="buttons">
                        <button onClick={e => setToggler(false)} >Español</button>
                        <button onClick={e => setToggler(true)}>English</button>
                    </div>
                   </div>
                    
                    <p className="description">{Toggler ? englishText : textoEspañol } </p>
                    </div>
                    <p className="advice">To go back, click on the ufo</p>
                </div>      
        </div>
    )
}

export default Aboutme
