import React from 'react';
import styles from './Hamburger.scss';

class Hamburger extends React.Component {
  state = {
    menuOpen: false,
  }

  render() {
    return (
      <div onClick={this.toggleList} ref={ref => { this.menuToggler = ref }} id='menuToggler' className={styles.component}>
        <i className="fas fa-bars"></i>
      </div>
    );
  }
  
  toggleList = event => {
    const target = event.target;
    console.log(target);

  }
}

export default Hamburger;