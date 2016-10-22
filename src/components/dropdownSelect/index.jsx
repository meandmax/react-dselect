import React, { Component } from 'react';
import classnames from 'classnames';
import TreeNode from '../treeNode';
import SearchInput from '../searchInput';
import {filterList, flattenList} from '../../modules/list';
import styles from './dropdownSelect.css';

class DropdownSelect extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.setFilteredList = this.setFilteredList.bind(this);
    this.setValue = this.setValue.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);

    this.state = {
      open: false,
      list: this.props.list
    };
  }

  onClick() {
    this.setState({
      open: !this.state.open
    });

    document.addEventListener('click', this.closeDropdown);
  }

  closeDropdown(event) {
    const dropdownSelectNode = this.refs.dropdownSelect;

    document.removeEventListener('click', this.closeDropdown);

    // if clicked on any element inside the component do not close the component
    if (!dropdownSelectNode || dropdownSelectNode.contains(event.target)) {
      return;
    }

    if (this.state.open) {
      this.setState({
        open: false
      });
    }
  }

  renderDropdownList(list) {
    return list.map((element) => {
      if (element.children) {
        return <TreeNode key={element.name} name={element.name} nestingLevel={1} onClickText={this.setValue} children={element.children} />
      }

      return  (
        <li className={styles.listItem} key={element.name} onClick={this.setValue(element.name)}>
          <div className={styles.listItemInner}>
            {element.name}
          </div>
        </li>
      );
    });
  }

  setFilteredList(value) {
    this.setState({
      searchValue: value, 
      filteredList: filterList(flattenList(this.props.list), value)
    });
  }

  setValue(value) {
    return () => {
      this.setState({
        value,
        open: false,
        list: this.props.list // reset list after element is selected
      });    
    }
  }

  render() {
    let buttonText = this.state.value || 'click here';

    const listClasses = classnames(styles.list, {
      [styles.listOpen]: this.state.open
    });

    return (
      <div className={styles.wrapper} ref='dropdownSelect'>
        <div>
          {this.state.open ? (
            <SearchInput onChange={this.setFilteredList} />
          ) : (
            <button type='button' className={styles.button} onClick={this.onClick}>
              <span>{buttonText}</span>
              <span className={styles.caretDown}>
                <svg version="1.1" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#00000e" d="M4.431 5.918h7.2c0.108 0 0.202 0.045 0.282 0.135s0.119 0.196 0.118 0.32c0 0.133-0.038 0.242-0.113 0.326l-3.6 4.091c-0.075 0.085-0.171 0.128-0.287 0.128s-0.212-0.043-0.287-0.128l-3.6-4.091c-0.076-0.085-0.113-0.194-0.113-0.326 0-0.123 0.039-0.23 0.118-0.32s0.173-0.135 0.282-0.135z"></path>
                </svg>
              </span>
            </button>
          )}
          <ul className={listClasses}>
            {this.state.filteredList ? this.renderDropdownList(this.state.filteredList) : this.renderDropdownList(this.state.list)}
          </ul>
        </div>
      </div>
    );
  }
}

export default DropdownSelect;
