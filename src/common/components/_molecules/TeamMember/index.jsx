/**
 * @flow
 */
// import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Header, Container, Image} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import {StyledTeamMember} from './style'

type Props = {
	photo: string,
	name: string,
	description: string
}

class TeamMember extends Component<Props> {
	render () {
		const {photo, name, description} = this.props
		return (
			<StyledTeamMember>
				<div>
					<div className="photo">
						<img src={photo} />
					</div>
					<div className="name">{name}</div>
					<div className="description">{description}</div>
				</div>
			</StyledTeamMember>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {}
}

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamMember))
