import PropTypes from 'prop-types';
import React from 'react';
import PressItem from 'components/_molecules/PressItem';
import { StyledPress } from './style';

export default function Press({ articles }) {
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
  );
}

Press.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    photo: PropTypes.string,
  })).isRequired,
};
