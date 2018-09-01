import styled from 'styled-components';
// import {media} from 'styles/utils'

export const StyledPressItem = styled.div`
    flex: 1;
    align-items: center;
    align-content: center;
    align-self: center;
    margin: 80px 15px 0;
    padding: 40px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 10px 25px 0 rgba(47, 41, 65, 0.1);
  .title {
    font-size: 18px;
    margin: 0 0 10px;
    color: #2c263f;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description {
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    margin: 0;
    color: #1b152d;
  }
`;
