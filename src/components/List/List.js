import React from 'react';
import styles from './List.scss';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';

class List extends React.Component { //! class component should always start with propTypes.

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.defaultImage,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero
            titleText={title}
            imageSrc={image}
          />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      </Container>
    );
  }
}

export default List;
