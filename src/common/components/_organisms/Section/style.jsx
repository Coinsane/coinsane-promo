import styled from 'styled-components'
// import {media} from 'styles/utils'

export const StyledSection = styled.div`
	display: flex;
	flex: 1;
	flex-flow: row wrap;
	justify-content: center;
	background: ${props => props.background ? props.background : ''};
	.section {
		padding: 100px;
	}
	.section-h2 {
		font-weight: normal !important;
		font-size: 38px !important;
		color: ${props => props.color ? props.color : '#747AFF'};
		margin-bottom: 20px !important;
	}
`
