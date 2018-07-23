/**
 * @flow
 */
// import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import {StyledSection} from './style'

type Props = {
	title: string,
	background: string,
	color: string,
}

class Section extends Component<Props> {
	render () {
		const {title, background, color} = this.props
		return (
			<StyledSection background={background} color={color}>
				<Container className={background && 'block'}>
					<Header
						className="section-h2"
						as="h2"
						content={title}
						textAlign="center"
					/>
				</Container>
			</StyledSection>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {}
}

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Section))
