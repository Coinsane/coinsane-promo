// @flow
import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Container, Image} from 'semantic-ui-react'
// import {FormattedMessage} from 'react-intl'
import {StyledDescription, DescriptionBlock, FeaturesBlock, RoadmapBlock, TeamBlock, PartnerBlock, PressBlock, DownloadBlock} from './style'

import Head from 'components/Head'
import Footer from 'components/Footer'

const Dashboard = () => {
	return (
		<StyledDescription>
			<Helmet>
				<title>Coinsane</title>
				<meta name="description" content="Crypto accounting platform" />
			</Helmet>
			<Head />
			<DescriptionBlock>
				<Container>
					<Header className="description-h1" as='h1' content='Description' />
					<div className="flex">
						<div className="flex-item-3">
							<Image
								className="description-image"
								src={require('static/images/description.svg')}
							/>
						</div>
						<div className="flex-item-7">
							<p className="description-p">{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</p>
							{/* <FormattedMessage className="description-p" id="Dashboard.p2" /> */}
						</div>
					</div>
				</Container>
			</DescriptionBlock>
			<FeaturesBlock>
				<Container className="block">
					<Header className="features-h1" as='h1' content='Features' />
				</Container>
			</FeaturesBlock>
			<RoadmapBlock>
				<Container className="block">
					<Header className="roadmap-h1" as='h1' content='Roadmap' />
				</Container>
			</RoadmapBlock>
			<TeamBlock>
				<Container>
					<Header className="team-h1" as='h1' content='Team' />
				</Container>
			</TeamBlock>
			<PartnerBlock>
				<Container className="block">
				</Container>
			</PartnerBlock>
			<PressBlock>
				<Container className="block">
					<Header className="press-h1" as='h1' content='Press about us' />
				</Container>
			</PressBlock>
			<DownloadBlock>
				<Container className="block">
				</Container>
			</DownloadBlock>
			<Footer />
		</StyledDescription>
	)
}

export default Dashboard
