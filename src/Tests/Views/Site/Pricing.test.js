import React from 'react';
import ReactDOM from 'react-dom';
import Pricing from '../../../Views/Site/Pricing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pricing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
