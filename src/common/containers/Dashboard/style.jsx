import styled from 'styled-components'
// import {media} from 'styles/utils'

export const DescriptionBlock = styled.div`
	background: white;
	padding: 100px 0;
`

export const FeaturesBlock = styled.div`
	background-image: radial-gradient(50% 96%, #F9F9FC 0%, #EFF1F6 96%);

	.features-h1 {
		font-size: 38px !important;
		font-weight: normal !important;
		color: #747AFF !important;
		text-align: center;
		margin-bottom: 20px !important;
	}
`

export const PressBlock = styled.div`
	background-image: radial-gradient(50% 96%, #F9F9FC 0%, #EFF1F6 96%);

	.press-h1 {
		font-size: 38px !important;
		font-weight: normal !important;
		color: #747AFF !important;
		text-align: center;
		margin-bottom: 20px !important;
	}
`

export const RoadmapBlock = styled.div`
	background-image: linear-gradient(-135deg, #322B48 0%, #1B152D 100%);

	.roadmap-h1 {
		font-size: 38px !important;
		font-weight: normal !important;
		color: #fff !important;
		text-align: center;
		margin-bottom: 20px !important;
	}
`

export const DownloadBlock = styled.div`
	background-image: linear-gradient(-90deg, #9A84FF 3%, #575EF3 100%);
`

export const PartnerBlock = styled.div`
	background-image: linear-gradient(-135deg, #322B48 0%, #1B152D 100%);
`

export const TeamBlock = styled.div`
	background: white;
	padding: 100px 0;
	
	.team-h1 {
		font-size: 38px !important;
		font-weight: normal !important;
		color: #747AFF !important;
		text-align: center;
		margin-bottom: 20px !important;
	}
`

export const StyledDescription = styled.header`
	.description-h1 {
		font-size: 38px !important;
		font-weight: normal !important;
		color: #747AFF !important;
		text-align: center;
		margin-bottom: 40px !important;
	}
	.flex {
		display: flex;
		flex: 1;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	.flex-item-3 {
		flex: .3;
		align-items: center;
		margin: 0 50px;
	}
	.flex-item-7 {
		flex: .7;
		align-items: center;
		margin: 0 50px;
	}
	.description-p {
		font-size: 18px;
	}
	.description-image {
		
	}
	.block {
		padding: 100px;
	}
`
