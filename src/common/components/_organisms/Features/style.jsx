import styled from 'styled-components';

export const StyledFeatures = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 70px;

  .features-row {
    flex: .3;
    align-items: center;
  }

  .features-show {
    flex: .4;
    text-align: center;
    align-items: center;
    align-self: center;
    background: url(${props => (props.backgroundImage ? props.backgroundImage : '')}) no-repeat center;
    position: relative;
  }

  .feature-image {
    width: 305px;
    margin: 0 auto;
    box-shadow: 10px 10px 30px 0 rgba(37,31,54,0.30), inset 0 1px 6px 0 rgba(0,0,0,0.13);
  }
  
  .feature-icon-1 {
    position: absolute;
    z-index: 1;
    top: 140px;
    left: 35px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }

  .feature-icon-2 {
    position: absolute;
    z-index: 1;
    top: 60px;
    right: 55px;
    transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -moz-transform: rotate(25deg);
    -webkit-transform: rotate(25deg);
    -o-transform: rotate(25deg);
  }

  .feature-icon-3 {
    position: absolute;
    z-index: 1;
    top: 300px;
    left: 30px;
  }

  .feature-icon-4 {
    position: absolute;
    right: 45px;
    top: 280px;
    transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -moz-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    -o-transform: rotate(15deg);
  }
`;
