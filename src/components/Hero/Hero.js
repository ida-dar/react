import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    {/* <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="img" /> */}
    <img className={styles.image} src={props.imageSrc} alt="img" />
  </header>
  
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
};

Hero.defaultProps = {
  imageSrc: settings.defaultListImage,
};

export default Hero;