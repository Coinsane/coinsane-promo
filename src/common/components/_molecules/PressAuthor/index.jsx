import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'semantic-ui-react';
import { StyledPressAuthor } from './style';

export default function PressAuthor({ photo, name, date }) {
  return (
    <StyledPressAuthor>
      <div className="photo">
        <Image src={photo} />
      </div>
      <div className="author-description">
        <div className="name">{name}</div>
        <div className="date">{date}</div>
      </div>
    </StyledPressAuthor>
  );
}

PressAuthor.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
