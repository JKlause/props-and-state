import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  
  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker 
      colors={['red', 'green', 'purple']}
      selectColor={ () => {} }/>);
    expect(wrapper).toMatchSnapshot();
  });
  // it('changes color on button click', () => {
  //   const wrapper = shallow(<ColorPicker 
  //     colors={['red', 'green', 'purple']} 
  //     selectColor={ ()=> {}}/>);
  //   wrapper.findWhere(el => el.key() === 'green').simulate('click');
  //   expect(wrapper.state('background')).toBe('green');
  // });
});
