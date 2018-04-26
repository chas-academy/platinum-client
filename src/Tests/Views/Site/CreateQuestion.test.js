import React from 'react';
import ReactDOM from 'react-dom';
import CreateQuestion from '../../../Views/Site/CreateQuestion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateQuestion />, div);
  ReactDOM.unmountComponentAtNode(div);
});
