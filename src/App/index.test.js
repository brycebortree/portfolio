import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import Menu from '../Menu';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

        it('has a Menu', () => {
          const app = shallow(<App />);
          expect(app.contains(<Menu />));
        });
