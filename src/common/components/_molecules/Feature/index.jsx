/**
 * @flow
 */
import PropTypes from 'prop-types';
import React from 'react';
import { StyledFeature } from './style';

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

Feature.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default function Feature({
  isActive, title, description, onClick,
}) {
  return (
    <StyledFeature isActive={isActive} onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </StyledFeature>
  );
}
