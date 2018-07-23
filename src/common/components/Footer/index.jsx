/**
 * @flow
 */
import React from 'react'
import {Grid, Header, Icon, Container} from 'semantic-ui-react'
import {StyledFooter} from './style'

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Grid relaxed>
					<Grid.Row verticalAlign="middle">
						<Grid.Column width={3}>
							<Header as="h3" inverted>Company</Header>
							About Us<br />
							Career<br />
							Terms and Conditions<br />
							Privacy policy
						</Grid.Column>
						<Grid.Column width={3}>
							<Header as="h3" inverted>Support</Header>
							Contact Us<br />
							FAQ<br />
							Blog
						</Grid.Column>
						<Grid.Column width={3}>
							<Header as="h3" inverted>Media Social</Header>
							<Icon name="twitter" /> Twitter<br />
							<Icon name="telegram" /> Telegram<br />
						</Grid.Column>
						<Grid.Column width={3}>
							<Header as="h3" inverted>Address</Header>
							Krasnodar
						</Grid.Column>
						<Grid.Column width={4}>
							<Header as="h3" inverted>
								<Header.Content>
									Coinsane
									<Header.Subheader>
										Copyright Coinsane © 2018
									</Header.Subheader>
								</Header.Content>
							</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</StyledFooter>
	)
}

export default Footer
