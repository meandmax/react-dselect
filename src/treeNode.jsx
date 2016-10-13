import React, { Component } from 'react';
import './App.css';

class TreeNode extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.onClick = this.onClick.bind(this); 
  }

  onClick() {
    this.setState({
      open: !this.state.open
    });
  }

  renderChildren(children) {
    return children.map(({name, children}) => {
      if (children) {
        return <TreeNode key={name} name={name} children={children} />
      }

      return <li key={name}>{name}</li>
    });
  }

  render() {
    return (
      <li>
        <span onClick={this.onClick}>
          {this.props.name}
        </span>
        <ul>
          {this.state.open ? this.renderChildren(this.props.children) : null}
        </ul>
      </li>
    );
  }
}

export default TreeNode;

