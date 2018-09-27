import styled from 'styled-components';

export const StyledRoadItem = styled.div`
  position: relative;
  .box {
    flex: 1;
    flex-flow: column;
    align-items: center;
    align-content: center;
    align-self: center;
    margin: 25px 15px 0;
    padding: 40px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 10px 25px 0 rgba(47, 41, 65, 0.1);

      .title {
        font-size: 18px;
        margin: 0 0 10px;
        color: #747AFF;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
      }
      .description {
        height: 95px;
        overflow: auto;
        text-overflow: ellipsis;
        font-size: 14px;
        margin: 0;
        color: #1b152d;
        text-align: left;
        white-space: pre-wrap;
      }
  }
`;
