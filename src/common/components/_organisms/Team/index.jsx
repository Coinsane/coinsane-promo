/**
 * @flow
 */
import PropTypes from 'prop-types'
import React from 'react'
import {StyledTeam} from './style'
import TeamMember from 'components/_molecules/TeamMember'

Team.propTypes = {
	members: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		photo: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string
	})).isRequired
}

export default function Team ({ members }) {
	return (
		<StyledTeam>
			{members && members.map(member => (
				<TeamMember
					key={member.id}
					photo={member.photo}
					name={member.name}
					description={member.description}
				/>
			))}
		</StyledTeam>
	)
}
