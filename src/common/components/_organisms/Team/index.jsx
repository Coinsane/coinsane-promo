/**
 * @flow
 */
import PropTypes from 'prop-types';
import React from 'react';
import TeamMember from 'components/_molecules/TeamMember';
import { StyledTeam } from './style';

export default function Team({ members }) {
  return (
    <StyledTeam>
      {members && members.map(member => (
        <TeamMember
          key={member.id}
          photo={member.photo}
          name={member.name}
          description={member.description}
        />
      ))}
    </StyledTeam>
  );
}

Team.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    photo: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};
