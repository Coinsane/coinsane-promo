import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import RoadItem from 'components/_molecules/RoadItem';
import PropTypes from 'prop-types';
import { StyledRoadMap } from './style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

RoadMap.propTypes = {
  quarter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default function RoadMap({ quarter }) {
  return (
    <StyledRoadMap>
      <Carousel
        showArrows
        autoPlay
        interval={10000}
        infiniteLoop
        showThumbs={false}
        centerMode
        centerSlidePercentage={50}
        emulateTouch
        showStatus={false}
        showIndicators={false}
      >
        {quarter && quarter.map(q => (
          <RoadItem
            key={q.id}
            title={q.title}
            description={q.description}
          />
        ))}
      </Carousel>
    </StyledRoadMap>
  );
}
