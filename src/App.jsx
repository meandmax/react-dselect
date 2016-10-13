import React, { Component } from 'react';
import TreeNode from './treeNode.jsx';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = {
      open: false
    };
  }

  onClick() {
    this.setState({
      open: !this.state.open
    });
  }

  renderDropdownList(list) {
    return list.map(({name, children}) => {
      if (children) {
        return <TreeNode key={name} name={name} children={children} />
      }

      return <li key={name}>{name}</li>
    });
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.onClick}>Open</button>
        {this.state.open ? (
          <ul>
            {this.renderDropdownList(this.props.list)}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default App;
