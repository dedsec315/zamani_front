import React from 'react';
import Logo from '../Components/Logo';
import background from "../styles/background3.jpg";


const About = () => {
    return (
    <div style={{ backgroundImage: `url(${background})` , backgroundSize: 'cover',
    backgroundPosition: 'center center',} }>
      <Logo />
    </div>
    );
};

export default About;