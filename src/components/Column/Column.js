import React from 'react';
import styles from './Column.scss';
//import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
// import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    name: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  // static defaultProps = {
  //   name: settings.defaultColumnIcon,
  // }

  //haveCards = this.state.cards.length > 0
  
  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon} /></span></h3>

        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}

        {/* {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
        
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} haveCards={this.haveCards} /> */}
      </section>
    );
  }
}

export default Column;