import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import { listData, settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator';
//import Hamburger from '../Hamburger/Hamburger.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

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
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/* <List {...listData} title={[ 'Things to do ', <sup key='1'>soon!</sup> ]} image='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
          <p>I'm planning on doing all these things sonner, rather than later!</p>
        </List> */}
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

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  }
  
}

export default App;
