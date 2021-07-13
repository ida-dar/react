import React from 'react';
import styles from './SearchResults.scss';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';

class SearchResult extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards} = this.props;
    return(
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span> {title}</h3>

          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          
        </section>
      </Container>
    );
  }
}

export default SearchResult;