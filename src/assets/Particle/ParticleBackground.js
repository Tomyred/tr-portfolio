import React, { Fragment } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Config/Particle-config';


export default function ParticleBackground(){
    return(
        <Fragment>
        <Particles params={particlesConfig}></Particles>
        </Fragment>
    )
}

