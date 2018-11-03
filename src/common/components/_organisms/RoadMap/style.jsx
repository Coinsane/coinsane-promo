import styled from 'styled-components';
import rightArrow from 'static/images/right-arrow.svg';
import leftArrow from 'static/images/left-arrow.svg';

export const StyledRoadMap = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  margin: 60px 0;
  .carousel .slide {
    background-color: transparent;
  }
  .carousel.carousel-slider .control-arrow {
    top: inherit;
    bottom: -90px;
  }
  .carousel.carousel-slider {
    overflow: inherit;
  }
  .carousel .control-prev.control-arrow {
    left: auto;
    right: 68px;
  }
  .carousel .slider-wrapper {
    overflow: inherit;
  }
  .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
    background: url('static/images/right-arrow.svg');
    border-radius: 50px;
    width: 50px;
    border: 1px solid #97949f;
    height: 50px;
  }
  .carousel .control-next.control-arrow:before {
    background: url(${rightArrow}) no-repeat center center;
  }
  .carousel .control-prev.control-arrow:before {
    background: url(${leftArrow}) no-repeat center center;
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: none;
    border-color: #fff;
  }
`;
