import styled from 'styled-components';

const grayBorder = 'rgba(255, 255, 255, 0.2)';

export const StyledRoadLine = styled.div`
  .titleMap {
    color: #ffffff;
    font-size: 19px;
    margin-bottom: 17.5px;
  }

  .quarter {
    position: relative;
    height: 50px;
  }
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: transparent;
    position: relative;
    margin: 0 auto;
  }
  .quartelLineRight {
    border: 2px solid #747AFF;
    width: 50%;
    position: absolute;
    top: 24px;
    right: 0;
  }
  .quartelLineLeft {
    border: 2px solid #747AFF;
    width: 50%;
    position: absolute;
    top: 24px;
    left: 0;
  }
  .currentQuartel {
    .quartelLineRight {
      border-color: ${grayBorder};
    }
    .circle {
      background-color: rgba(255, 255, 255, 0.08);
      .circleInside {
        border-radius: 25px;
        width: 25px;
        border: 3.5px solid #97949f;
        height: 25px;
        background-color: #747AFF;
        position: absolute;
        left: 12.5px;
        top: 12.5px;
      }
    }
  }
  .nextQuartel {
    .quartelLineLeft {
      border-color: ${grayBorder};
    }
    .quartelLineRight {
      border-color: ${grayBorder};
    }
    .circle {
      .circleInside {
        border-radius: 25px;
        width: 25px;
        border: 3.5px solid ${grayBorder};
        height: 25px;
        background-color: #2c2a42;
        position: absolute;
        left: 12.5px;
        top: 12.5px;
      }
    }
  }
  .passedQuartel {
    .circle {
      .circleInside {
        border-radius: 25px;
        width: 25px;
        border: 3.5px solid #97949f;
        height: 25px;
        background-color: #747AFF;
        position: absolute;
        left: 12.5px;
        top: 12.5px;
      }
    }
  }
  .oldQuartel {
    .circle {
      .circleInside {
        border-radius: 25px;
        width: 25px;
        border: 3.5px solid #97949f;
        height: 25px;
        background-color: #747AFF;
        position: absolute;
        left: 12.5px;
        top: 12.5px;
  }
`;
