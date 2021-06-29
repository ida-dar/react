import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component { //! class component should always start with propTypes.
  static propTypes = {  // property in which we save type definitions must be called 'propTypes' in which we save an object. Keys in the object are components' properties. For each property name, we provide its type, using the types saved in the imported PropTypes object.
    title: PropTypes.node.isRequired, // 'isRequired' displays an error in console if the component doesn't receive the propperty. Without 'isRequired' the propperty is optional.
    image: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>, // default property value. If no content for list description is given, then the default decription is inserted.
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Garden' />
          <Column title='Home' />
          <Column title='Shopping' />
        </div>
      </section>
    )
  }
}

export default List;
