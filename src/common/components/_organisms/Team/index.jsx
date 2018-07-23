/**
 * @flow
 */
// import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Header, Container, Image} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import {StyledTeam} from './style'
import {TeamMember} from 'components/_molecules/TeamMember'

type Props = {
	members: array
}

class Team extends Component<Props> {
	render () {
		const {members} = this.props
		return (
			<StyledTeam>
				{members && members.map(member => (
					<TeamMember
						key={member.id}
						// photo={member.photo}
						// name={member.name}
						description={member.description}
					/>
				))}
			</StyledTeam>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {}
}

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Team))
