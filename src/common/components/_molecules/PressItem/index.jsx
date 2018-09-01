import PropTypes from 'prop-types';
import React from 'react';
import PressAuthor from 'components/_molecules/PressAuthor';
import { StyledPressItem } from './style';

export default function PressItem({
  title, description, photo, name, date,
}) {
  const maxSize = 80;
  const slicedDescription = description.length > maxSize ? `${description.slice(0, maxSize)}...` : description;
  return (
    <StyledPressItem>
      <div className="title">{title}</div>
      <div className="description">{slicedDescription}</div>
      <PressAuthor photo={photo} name={name} date={date} />
    </StyledPressItem>
  );
}

PressItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
