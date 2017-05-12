import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';

class TopBars extends Component {
	onRef(ref) {
		this.ref = ref;
	}

	render() {
		const { type } = this.props;
		const { isOpen } = this.props;
		return type === 'nav'
			? <Portal isOpened={isOpen}>
					<nav data-ts="TopBar" ref={this.onRef} />
				</Portal>
			: <Portal isOpened={isOpen}>
					<header data-ts="TopBar" ref={this.onRef} />
				</Portal>;
	}
}
TopBars.propTypes = {
	isOpen: PropTypes.bool,
	type: PropTypes.string
};

TopBars.defaultProps = {
	isOpen: false,
	type: 'nav'
};

export default TopBars;
