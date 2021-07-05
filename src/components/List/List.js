import React from 'react';
import styles from './List.scss';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class List extends React.Component { //! class component should always start with propTypes.
  state = {
    columns: this.props.columns || [], // if this.props.columns has not been defined, i.e. the component has not received props columns, then this.state.columns will contain an empty array []
  }

  static propTypes = {  // property in which we save type definitions must be called 'propTypes' in which we save an object. Keys in the object are components' properties. For each property name, we provide its type, using the types saved in the imported PropTypes object.
    title: PropTypes.node.isRequired, // 'isRequired' displays an error in console if the component doesn't receive the propperty. Without 'isRequired' the propperty is optional.
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription, // default property value. If no content for list description is given, then the default decription is inserted.
    image: settings.defaultListImage,
  }

  render() {
    //console.log(this.state);
    return (
      <section className={styles.component}>
        <Hero
          titleText={this.props.title}
          imageSrc={this.props.image}
        />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            // In this case (in a loop or .map method if we generate a component for each element in the array), we have to give each column the key. It has to be done explicitly - i.e. in the JSX code there must be expresion 'key = {}'.
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          {/* this function does not change the meaning of 'this', so it still points to an instance of the class. If we insert action={this.addColumn}, then it points to addColumn() */}
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          {/* another option: */}
          {/* <Creator text={settings.columnCreatorText} action={this.addColumn.bind(this)}/> */}
        </div>
      </section>
    );
  }

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }
}

export default List;
