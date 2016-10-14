import React, { Component } from 'react';
import styles from './treeNode.css';
import classnames from 'classnames';

function getListItemClasses(defaultStyle, nestingLevel) {
    return classnames(defaultStyle, {
      [styles['listItemLevel1']]: nestingLevel === 1,
      [styles['listItemLevel2']]: nestingLevel === 2,
      [styles['listItemLevel3']]: nestingLevel === 3,
      [styles['listItemLevel4']]: nestingLevel === 4
    });
}

class TreeNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.onClick = this.onClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this); 
  }

  onClick() {
    this.setState({
      open: !this.state.open
    });
  }

  renderChildren(list) {
    return Object.keys(list).map((key) => {
      const nestingLevel = this.props.nestingLevel + 1
      if (list[key].children) {
        return <TreeNode key={key} name={key} nestingLevel={nestingLevel} onClickText={this.props.onClickText} children={list[key].children} />
      }

      return  (
        <li className={getListItemClasses(styles.listItem, nestingLevel)} key={key} onClick={this.props.onClickText(key)}>
          <div className={styles.listItemInner}>
            <span className={styles.listItemText}>{list[key].text}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    const listHeaderClasses = classnames(styles.listHeader, {
      [styles['listHeaderOpen']]: this.state.open 
    });

    const caretClasses = classnames(styles.caret, {
      [styles.caretOpen]: this.state.open
    });

    return (
      <li className={getListItemClasses(styles.listItem, this.props.nestingLevel)}>
        <div className={listHeaderClasses}>    
          <span onClick={this.onClick} className={caretClasses}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path className={styles.caretSvgPath} d="M5.918 11.564v-7.2c0-0.108 0.045-0.202 0.135-0.282 0.090-0.079 0.196-0.119 0.32-0.118 0.133 0 0.242 0.038 0.326 0.113l4.091 3.6c0.085 0.075 0.128 0.171 0.128 0.287s-0.043 0.212-0.128 0.287l-4.091 3.6c-0.085 0.075-0.194 0.113-0.326 0.113-0.123 0-0.23-0.039-0.32-0.118s-0.135-0.173-0.135-0.282z"></path>
            </svg>
          </span>

          <span className={styles.listItemText} onClick={this.props.onClickText(this.props.name)}>
            {this.props.name}
          </span>
        </div>
        {this.state.open ? (
          <ul className={styles.list}>
            {this.renderChildren(this.props.children)}
          </ul>
        ) : null}
      </li>
    );
  }
}

export default TreeNode;