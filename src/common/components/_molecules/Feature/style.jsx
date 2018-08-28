import styled from 'styled-components'
// import {media} from 'styles/utils'

export const StyledFeature = styled.div`
	background: ${props => props.isActive ? 'white' : 'transparent'};
	box-shadow: ${props => props.isActive ? '0 10px 25px 0 rgba(47,41,65,0.10)' : 'none'};
	border-radius: 8px;
	padding: 20px;
	margin: 20px;
	cursor: pointer;

	.title {
		font-size: 19px;
		color: #2C263F;
		margin-bottom: 14px;
	}

	.description {
		font-size: 14px;
		color: #1B152D;
	}
`
