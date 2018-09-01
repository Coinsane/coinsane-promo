import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import RoadItem from 'components/_molecules/RoadItem'
import PropTypes from 'prop-types'
// import {StyledRoadMap} from './style'

RoadMap.propTypes = {
	quarter: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		description: PropTypes.string
	})).isRequired
}

/* class DemoCarousel extends Component {
	render () {
		return (
			<Carousel>
				<div>
					<img src="static/images/feature-1.png" />
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img src="static/images/feature-2.png" />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src="static/images/feature-3.png" />
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>
		)
	}
}
*/
export default function RoadMap ({ quarter }) {
	return (
		<Carousel showThumbs={false}>
			{quarter && quarter.map(quarter => (
				<RoadItem
					key={quarter.id}
					title={quarter.title}
					description={quarter.description}
				/>
			))}
		</Carousel>
	)
}
