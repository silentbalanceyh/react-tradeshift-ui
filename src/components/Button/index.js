import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	/*
	 * The goal here is to add class names to the classList array
	 * while keeping the class names that the Tradeshift UI library
	 * adds after spiritualizing the element. Passing props directly to
	 * the className attribute would overwrite the existing names so
	 * we must make a reference to the DOM node and update the classList
	 * array dynamically upon passing new refs.
	 *
	 * Partially this works for the storybook application, but the
	 * idea applies for normal instantiation as well.
	 *
	 */
	componentDidMount() {
		this.props.classes.forEach(addedClass => {
			this.button.classList.add(addedClass.trim());
		});
	}

	componentWillReceiveProps({ classes }) {
		// Remove the previous type from the classList array
		// Trim for safety because it may cause `Uncaught DOMException`
		this.props.classes.forEach(addedClass => {
			this.button.classList.remove(addedClass.trim());
		});
		// Add the new one
		classes.forEach(addedClass => {
			this.button.classList.add(addedClass.trim());
		});
	}

	render() {
		const buttonProps = {
			'data-ts.busy': this.props.busy
		};

		return (
			<button
				id={this.props.id}
				classes={this.props.classes}
				data-ts="Button"
				{...buttonProps}
				// Set this ref so we can grab the classList later after
				// TS.ui spiritualizes and adds classes.
				ref={el => (this.button = el)}
			>
				{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	busy: PropTypes.bool,
	id: PropTypes.string,
	classes: PropTypes.arrayOf(PropTypes.string),
	children: PropTypes.element.isRequired
};

Button.defaultProps = {
	busy: false,
	classes: [],
	id: '',
	children: <span>Default Button</span>
};

export default Button;
