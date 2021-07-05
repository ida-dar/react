import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    haveCards: PropTypes.bool,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
    amount: '',
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      // eslint-disable-next-line react/prop-types
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    this.setState({
      value: '',
      visibleButtons: false,
    });
    window.confirm('Operation cancelled');
  }

  handleInfo = (event) => {
    const parent = event.target.parentElement.parentElement.parentElement;
    const lenght = parent.children.length - 2;
    //console.log(parent, lenght.toString());
    if(lenght > 0) {
      window.confirm('Amount of cards in the column: ' + lenght.toString());
    } else {
      window.confirm('Amount of cards in the column: ' + 0);
    }
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
          {this.props.haveCards && <Button onClick={this.handleInfo} variant='info'>Info</Button>}
        </div>
      </div>
    );
  }
}

export default Creator;
