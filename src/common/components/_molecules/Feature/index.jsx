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
	isActive: PropTypes.bool
}

Feature.defaultProps = {
	isActive: false
}

export default function Feature ({photo, isActive, title, description}) {
	return (
		<StyledFeature isActive={isActive}>
			<div className="title">{title}</div>
			<div className="description">{description}</div>
		</StyledFeature>
	)
}
