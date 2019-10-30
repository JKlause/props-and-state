import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('ColorContainer component', () => {
  it('renders ColorContainer', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('changes color on button click', () => {
    const wrapper = shallow(<ColorContainer colors={['red', 'green', 'purple']} />);
    wrapper.findWhere(el => el.key() === 'green').simulate('click');
    expect(wrapper.state('backgroundColor')).toBe('green');
  });
});
