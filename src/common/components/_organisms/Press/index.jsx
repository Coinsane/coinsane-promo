import PropTypes from 'prop-types'
import React from 'react'
import {StyledPress} from './style'
import PressItem from 'components/_molecules/PressItem'

Press.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		description: PropTypes.string,
		date: PropTypes.string,
		photo: PropTypes.string
	})).isRequired
}

export default function Press ({ articles }) {
	return (
		<StyledPress>
			{articles && articles.map(article => (
				<PressItem
					key={article.id}
					title={article.title}
					description={article.description}
					photo={article.photo}
					date={article.date}
					name={article.name}
				/>
			))}
		</StyledPress>
	)
}
