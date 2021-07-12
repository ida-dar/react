import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
//import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator';
//import Hamburger from '../Hamburger/Hamburger.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class Home extends React.Component {
  // state = {
  //   lists: this.props.lists || [],
  // }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        {/* TODO: Hamburger - lists toggler */}
        {/* <Hamburger /> */}
        
        {/* <List {...listData} /> */}
        {/* {this.state.lists.map(({key, ...listProps}) => (
          <List key={key} {...listProps} />
        ))} */}
        {/* <div className={styles.newList}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}
      </main>
    );
  }

  // addList(title) {
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
  //           title,
  //         },
  //       ],
  //     }
  //   ));
  // }
  
}

export default Home;
