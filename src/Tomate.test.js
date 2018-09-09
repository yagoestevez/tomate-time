import React from 'react';
import ReactDOM from 'react-dom';
import Tomate from './Tomate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tomate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
