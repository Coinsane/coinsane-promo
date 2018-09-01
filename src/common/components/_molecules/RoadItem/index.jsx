import PropTypes from 'prop-types'
import React from 'react'
import {StyledRoadItem} from './style'

RoadItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default function RoadItem ({title, description}) {
	return (
		<StyledRoadItem>
			<div className="title">{title}</div>
			<div className="description">{description}</div>
		</StyledRoadItem>
	)
}
