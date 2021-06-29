import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {/* <List {...listData} title={[ 'Things to do ', <sup key='1'>soon!</sup> ]} image='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
          <p>I'm planning on doing all these things sonner, rather than later!</p>
        </List> */}
        <List {...listData} />
      </main>
    )
  }
}

export default App;
