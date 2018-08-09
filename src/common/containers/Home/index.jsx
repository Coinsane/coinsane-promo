// @flow
import React from 'react'
import {Helmet} from 'react-helmet'
import {Image} from 'semantic-ui-react'
// import {FormattedMessage} from 'react-intl'
import {StyledHome} from './style'

import Head from 'components/Head'
import Footer from 'components/Footer'
import Features from 'components/_organisms/Features'
import Team from 'components/_organisms/Team'
import Press from 'components/_organisms/Press'
import DownloadSection from 'components/_organisms/DownloadSection'
import Section from 'components/_organisms/Section'

const Home = () => {
	const features = [
		{id: 1, photo: '', title: 'Мониторинг крипто-портфолио', description: 'Lorem Ipsum is simply dummy text of the printing', isActive: true},
		{id: 2, photo: '', title: 'Статистические данные', description: 'Lorem Ipsum is simply dummy text of the printing', isActive: false},
		{id: 3, photo: '', title: 'Актуальная информация по рынку', description: 'Lorem Ipsum is simply dummy text of the printing', isActive: false},
		{id: 4, photo: '', title: 'Детальная информация по монетам', description: 'Lorem Ipsum is simply dummy text of the printing', isActive: false}
	]
	const members = [
		{id: 1, photo: require('static/images/description.svg'), name: 'Artem Kashin', description: 'CTO, Fullstack developer'},
		{id: 2, photo: require('static/images/description.svg'), name: 'Artem Kashin', description: 'CTO, Fullstack developer'},
		{id: 3, photo: require('static/images/description.svg'), name: 'Artem Kashin', description: 'CTO, Fullstack developer'}
	]
	const articles = [
		{id: 1, photo: require('static/images/description.svg'), title: 'Tests Go First', description: 'Countrary to popular belief, Lorem Ipsum is not simply random text', name: 'Ben Doring', date: 'Oct 27 - 8 Minutes read'},
		{id: 2, photo: require('static/images/description.svg'), title: 'Tests Go First. Usability Testing in Design.', description: 'Countrary to popular belief, Lorem Ipsum is not simply random text Countrary to popular belief, Lorem Ipsum is not simply random text', name: 'Ben Doring', date: 'Oct 27 - 8 Minutes read'},
		{id: 3, photo: require('static/images/description.svg'), title: 'Tests Go First. Usability Testing in Design.', description: 'Countrary to popular belief, Lorem Ipsum is not simply random text', name: 'Ben Doring', date: 'Oct 27 - 8 Minutes read'}
	]
	return (
		<StyledHome>
			<Helmet>
				<title>Coinsane</title>
				<meta name="description" content="Crypto accounting platform" />
			</Helmet>
			<Head />

			<Section title="Description">
				<div className="flex">
					<div className="flex-item-3">
						<Image
							className="description-image"
							src={require('static/images/description.svg')}
						/>
					</div>
					<div className="flex-item-7">
						<p className="description-p">{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</p>
						{/* <FormattedMessage className="description-p" id="Home.p2" /> */}
					</div>
				</div>
			</Section>

			<Section
				title="Features"
				background="radial-gradient(50% 96%, #F9F9FC 0%, #EFF1F6 96%)"
			>
				<Features
					list={features}
				/>
			</Section>

			<Section
				title="Roadmap"
				color="white"
				background="linear-gradient(-135deg, #322B48 0%, #1B152D 100%)"
			/>

			<Section title="Team">
				<Team members={members} />
			</Section>

			<Section background="linear-gradient(-135deg, #322B48 0%, #1B152D 100%)" />

			<Section
				title="Press about us"
				background="radial-gradient(50% 96%, #F9F9FC 0%, #EFF1F6 96%)"
			>
				<Press articles={articles}/>
			</Section>

			<DownloadSection
				background="linear-gradient(-90deg, #9A84FF 3%, #575EF3 100%)"
				image={require('static/images/iphone-download.png')}
				imageSet={require('static/images/iphone-download@2x.png')}
				title="Download the App"
				description="Our app is available for ios and android download now and enjoy this app on your smartphone anytime"
			/>

			<Footer />
		</StyledHome>
	)
}

export default Home
