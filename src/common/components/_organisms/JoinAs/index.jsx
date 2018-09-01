import PropTypes from 'prop-types';
import React from 'react';
import Partner from 'components/_molecules/Partner';
import CSButton from 'components/_molecules/CSButton';
import { ButtonBox, PartnersBox, StyledJoinAs } from './style';

export default function JoinAs({ partners }) {
  return (
    <StyledJoinAs>
      <PartnersBox>
        {partners && partners.map(partner => (
          <Partner
            key={partner.id}
            photo={partner.photo}
          />
        ))}
      </PartnersBox>
      <ButtonBox>
        <CSButton
          primary
          size="big"
          content="Join As A Partner"
        />
      </ButtonBox>
    </StyledJoinAs>
  );
}

JoinAs.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    photo: PropTypes.string,
  })).isRequired,
};
