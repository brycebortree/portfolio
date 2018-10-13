import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './index';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Menu says "I am a Menu!"', () => {
  const menu = shallow(<Menu />);
  expect(menu.text()).toEqual('I am a Menu!');
});
