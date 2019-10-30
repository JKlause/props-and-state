import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('RandomColor component', () => {
  it('renders RandomColor', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
  it('randomly changes color every second', () => {
    const wrapper = shallow(<RandomColor />);
    const instance = wrapper.instance();
    const firstColor = instance.state.background;
    instance.randomColor();
    expect(instance.state.background).not.toEqual(firstColor);
  });
});
