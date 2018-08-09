import styled from 'styled-components'
// import {media} from 'styles/utils'

export const StyledPressAuthor = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin: 20px 0 0;

  .photo {
    width: 40px;
    margin-right: 20px;
  	img {
  		width: 100%;
  	}
  }
  .author-description {
    flex-flow: column wrap;
    align-content: flex-start;
    justify-content: flex-start;
  }
	.name {
    text-align: left;
		font-size: 14px;
		margin: 2px 0 0;
		color: #141414;
    letter-spacing: -0.3px;
	}
	.date {
		font-size: 9px;
		color: #b2b2b2;
    letter-spacing: -0.2px;
	}
`
