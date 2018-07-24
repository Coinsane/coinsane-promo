/**
 * @flow
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import {StyledTopMenu} from './style'

type Props = {
	theme: object,
	inverted: boolean,
}

class TopMenu extends Component<Props> {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render () {
		const { activeItem } = this.state
		const {
			inverted = false
		} = this.props

		const menuClass = inverted ? 'menu' : 'menu-white'

		const menu = [
			{
				name: 'features',
				title: 'Features',
				onClick: this.handleItemClick
			},			{
				name: 'team',
				title: 'Team',
				onClick: this.handleItemClick
			},			{
				name: 'roadmap',
				title: 'Roadmap',
				onClick: this.handleItemClick
			},			{
				name: 'partners',
				title: 'Partners',
				onClick: this.handleItemClick
			}
		]

		return (
			<StyledTopMenu>
				<Menu
					className={menuClass}
					inverted={inverted}
					secondary
					size="massive"
				>
					<Container>
						<Menu.Item>
							<Image
								className="logo"
								src={require('static/images/logo.svg')}
								alt="logo"
							/>
						</Menu.Item>
						<Menu.Menu className="menu-menu" position="right">
							{menu.map(item => (
								<Menu.Item
									key={item.name}
									name={item.name}
									active={activeItem === item.name}
									onClick={item.onClick}
								>
									{item.title}
								</Menu.Item>
							))}
						</Menu.Menu>
						<Menu.Menu position="right">
							<Dropdown text='Language' item button>
								<Dropdown.Menu>
									<Dropdown.Item
										selected
										className="dropdown-item"
										flag="gb"
										text="English"
									/>
									<Dropdown.Item
										className="dropdown-item"
										flag="ru"
										text="Russian"
									/>
								</Dropdown.Menu>
							</Dropdown>
							<Menu.Item>
								<Image
									className="telegram"
									src={require('static/images/telegram.svg')}
									alt="telegram"
								/>
							</Menu.Item>
							<Menu.Item>
								<Image
									className="twitter"
									src={require('static/images/twitter.svg')}
									alt="twitter"
								/>
							</Menu.Item>
						</Menu.Menu>
					</Container>
				</Menu>
			</StyledTopMenu>
		)
	}
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopMenu))
