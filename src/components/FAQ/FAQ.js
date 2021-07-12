import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.imageTitle} imageSrc={faqContent.image} />
    <h2>{faqContent.title}</h2>
    <ol>
      {faqContent.faq.map(function(content, index) {
        return (
          <li key={index}>{content}</li>);
      })}
    </ol>
  </Container>
);

export default FAQ;