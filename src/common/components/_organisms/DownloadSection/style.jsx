import styled from 'styled-components'
// import {media} from 'styles/utils'

export const StyledDownloadSection = styled.div`
	background: ${props => props.background ? props.background : ''};

	.flex {
		display: flex;
		flex: 1;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		padding-top: 50px;
	}

	.flex-item {
		flex: .5;
	}
	
	.iphone-download {
		width: 519px;
		margin-bottom: -1px;
	}

	.download-h2 {
		color: white !important;
		font-size: 38px !important;
		font-weight: normal !important;
	}

	.download-p {
		color: white;
		font-size: 24px !important;
		margin-bottom: 30px;
	}

	.store-button {
		margin-right: 20px;
	}
`
