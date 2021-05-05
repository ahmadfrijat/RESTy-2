import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from './Form.js';
// import Results from './results.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', ()=>{
  xit('exists at the start of the application',()=>{
    let app = shallow(<Form />);
    expect(app.find('button').exists()).toBeTruthy();
    expect(app.find('input').exists()).toBeTruthy();
    expect(app.find('form').exists()).toBeTruthy();

  });
  xit('can correctly GET Method',()=>{
    let app = mount(<Form />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('Headers')).toBe(undefined);
    expect(app.state('Response')).toBe(undefined);
  });
  xit('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});