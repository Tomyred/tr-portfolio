import React, { useState } from 'react'
import './aboutme.css'
import photo from '../../assets/images/photo.jpg'

const Aboutme = () => {

    const [Toggler, setToggler] = useState(true)

    
            const textoEspañol ='Hola. Mi nombre es Tomás y si hay algo que detesto más que el autoelogio es caer en frases clichés o trilladas . Sin embargo, por esto algo no deja de ser verdad, por lo tanto, es con cierta incomodidad que si tuviera que elegir una palabra para describirme sería "apasionado"; La pasión e inclinación por dar lo mejor de mí cubre todos los aspectos de mi vida, desde las tareas más sencillas, como cambiar una bombilla o montar una estantería, hasta tareas más complejas como la programación. Esta pasión está constantemente alimentada por la propia naturaleza de la programación: una disciplina donde siempre hay algo nuevo que aprender, donde los desafios nunca cesan y el trabajo  te motiva constantemente a querer mejorar';
       
            const englishText='Hello. My name is Tomás and if there is something I hate more than self-praise, it is falling into cliché or hackneyed phrases. However, this does not mean that something ceases to be true, therefore, it is with some discomfort that if I had to choose a word to describe myself it would be "passionate"; The passion and inclination to give my best covers every aspect of my life, from the simplest tasks, such as changing a light bulb or mounting a shelf, to more complex tasks such as programming. This passion is constantly fueled by the very nature of programming: a discipline where there is always something new to learn, where work alone constantly motivates you to want to improve.';
   
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
