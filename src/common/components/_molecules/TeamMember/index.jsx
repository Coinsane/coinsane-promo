/**
 * @flow
 */
import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'semantic-ui-react';
import { StyledTeamMember } from './style';

export default function TeamMember({ photo, name, description }) {
  return (
    <StyledTeamMember>
      <div className="photo">
        <Image src={photo} />
      </div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </StyledTeamMember>
  );
}

TeamMember.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
