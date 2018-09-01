import styled from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  background: ${props => (props.background ? props.background : '')};
  padding-top: ${props => (!props.background ? '100px' : '0')};
  padding-bottom: ${props => (!props.background ? '100px' : '0')};
  .section {
    padding: 100px 0;
  }
  .section-h2 {
    font-weight: normal !important;
    font-size: 38px !important;
    color: ${props => (props.color ? props.color : '#747AFF')};
    margin-bottom: 20px !important;
  }
`;
