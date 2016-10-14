import DropdownSelect from './components/dropdownSelect';
import React, { Component } from 'react';
import styles from './demo.css';
import list from './fixture';

class Demo extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
          <span>React Dropdown Select</span>
          <div className={styles.content}>
            <DropdownSelect list={list} />
          </div>
      </div>
    );
  }
}

export default Demo;
