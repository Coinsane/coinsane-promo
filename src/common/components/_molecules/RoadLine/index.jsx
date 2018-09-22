import PropTypes from 'prop-types';
import React from 'react';
import { StyledRoadLine } from './style';

export default function RoadLine({ statusMap, titleMap }) {
  let parentClassName = '';
  if (statusMap === 'current_step') {
    parentClassName = 'quarter currentQuartel';
  }
  if (statusMap === 'next_step') {
    parentClassName = 'quarter nextQuartel';
  }
  if (statusMap === 'passed_step') {
    parentClassName = 'quarter passedQuartel';
  }
  if (statusMap === 'old_step') {
    parentClassName = 'quarter oldQuartel';
  }
  return (
    <StyledRoadLine>
      <div className="titleMap">{titleMap}</div>
      <div className={parentClassName}>
        <div className="quartelLineLeft" />
        <div className="quartelLineRight" />
        <div className="circle">
          <div className="circleInside" />
        </div>
      </div>
    </StyledRoadLine>
  );
}

RoadLine.propTypes = {
  statusMap: PropTypes.string.isRequired,
  titleMap: PropTypes.string.isRequired,
};
