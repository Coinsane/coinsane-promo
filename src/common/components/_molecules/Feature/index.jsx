/**
 * @flow
 */
import PropTypes from 'prop-types'
import React from 'react'
import {StyledFeature} from './style'

Feature.propTypes = {
	photo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	onClick: PropTypes.func
}

Feature.defaultProps = {
	isActive: false,
	onClick: () => {}
}

export default function Feature ({photo, isActive, title, description, onClick}) {
	return (
		<StyledFeature isActive={isActive}>
			<div onClick={onClick}>
				<div className="title">{title}</div>
				<div className="description">{description}</div>
			</div>
		</StyledFeature>
	)
}
