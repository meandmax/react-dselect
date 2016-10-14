import React, { Component } from 'react';
import styles from './searchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      value: '',  
    };
  }

  componentDidMount() {
    if (this.refs.searchInput) {
      this.refs.searchInput.focus();
    }
  }

  onChangeHandler(e) {
    const value = e.target.value; 
    this.props.onChange(value);
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <input
        type='text'
        className={styles.input}
        placeholder='Type here'
        value={this.state.value || ''}
        onChange={this.onChangeHandler}
        role='search'
        ref='search'
        />
    );
  }
}

export default SearchInput;
