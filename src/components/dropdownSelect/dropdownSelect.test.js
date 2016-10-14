import React from 'react';
import ReactDOM from 'react-dom';
import DropdownSelect from './index';
import list from '../../fixture';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DropdownSelect list={list} />, div);
});
