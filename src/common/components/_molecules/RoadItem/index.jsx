import PropTypes from 'prop-types';
import React from 'react';
import RoadLine from 'components/_molecules/RoadLine';
import { StyledRoadItem } from './style';

RoadItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  statusMap: PropTypes.string.isRequired,
  titleMap: PropTypes.string.isRequired,
};

export default function RoadItem({
  title, description, statusMap, titleMap,
}) {
  // let parentClassName = '';
  // if (statusMap === 'current_step') {
  //   parentClassName = 'currentQuartel';
  // }
  // if (statusMap === 'next_step') {
  //   parentClassName = 'nextQuartel';
  // }
  // if (statusMap === 'passed_step') {
  //   parentClassName = 'passedQuartel';
  // }
  return (
    <StyledRoadItem>
      <RoadLine titleMap={titleMap} statusMap={statusMap} />
      {/* <div>
          <div className="title_map">{titleMap}</div>
          <div className={parentClassName}>
            <div className="quartelLineLeft" />
            <div className="circle" />
            <div className="quartelLineRight" />
          </div>
      </div> */}
      <div className="box">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </StyledRoadItem>
  );
}
