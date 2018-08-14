/**
 * @flow
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import {StyledFeatures} from './style'

import Feature from 'components/_molecules/Feature'

type Props = {
	list: array,
}

class Features extends Component<Props> {
	render () {
		const {list} = this.props
		return (
			<StyledFeatures backgroundImage={require('static/images/features-bg.svg')}>
				<div className="features-row">
					{list.map((item) => <Feature key={item.id} {...item} />)}
				</div>
				<div className="features-show">
					<img
						className="feature-icon-1"
						src={require('static/images/coins/btc.svg')}
					/>
					<img
						className="feature-icon-2"
						src={require('static/images/coins/eth.svg')}
					/>
					<img
						className="feature-icon-3"
						src={require('static/images/chart-line.svg')}
					/>
					<img
						className="feature-icon-4"
						src={require('static/images/coins/xmr.svg')}
					/>
					<Image
						className="feature-image"
						src={require('static/images/feature-1.png')}
						srcSet={require('static/images/feature-1@2x.png')}
					/>
				</div>
				<div className="features-row">
					{list.map((item) => <Feature key={item.id} {...item} />)}
				</div>
			</StyledFeatures>
		)
	}
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Features))
