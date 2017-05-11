import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './';

describe('Button', () => {
	it('renders with default props', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper).toMatchSnapshot();
	});

	describe('Button Prop Functionality', () => {
		it('loads the primary class', () => {
			const wrapper = mount(<Button />);

			wrapper.setProps({
				classes: ['ts-primary', 'ts-micro']
			});

			expect(wrapper.find('.ts-primary .ts-micro')).toBeTruthy();
		});
	});
});
