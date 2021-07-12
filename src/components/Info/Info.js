import React from 'react';
import Container from '../Container/Container';
//import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import {infoText} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoText.imageTitle} imageSrc={infoText.image}/>
    <h2>{infoText.title}</h2>
    <p>{infoText.description}</p>
  </Container>
);

export default Info;