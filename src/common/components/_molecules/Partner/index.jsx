import PropTypes from 'prop-types'
import React from 'react'
import {Image} from 'semantic-ui-react'
import {StyledPartner} from './style'

TeamPartner.propTypes = {
	photo: PropTypes.string.isRequired
}

export default function TeamPartner ({photo}) {
	return (
		<StyledPartner>
			<div className="photo">
				<Image src={photo} />
			</div>
		</StyledPartner>
	)
}
