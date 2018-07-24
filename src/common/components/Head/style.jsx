import styled from 'styled-components'
// import {media} from 'styles/utils'

export const StyledHeader = styled.header`
	position: relative;
	background-image: linear-gradient(-144deg, #322B48 7%, #1B152D 100%);
	.h1 {
		font-weight: normal !important;
		font-size: 38px !important;
	}
	.h2 {
		font-weight: normal !important;
		font-size: 24px !important;
		margin-bottom: 40px !important;
	}
	.store-button {
		margin-right: 20px;
	}
	.phone {
	  float: right;
		z-index: 1;
		margin-top: 40px;
		width: 440px;
		margin-bottom: -70px;
	}
	.flex {
		display: flex;
		flex: 1;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	.flex-item {
		flex: .5;
		align-items: center;
	}
	.header-menu {
		padding-top: 10px;
	}
	.header-shape-1 {
		position: absolute !important;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}
	.header-shape-2 {
		position: absolute !important;;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}
	.header-shape-3 {
		position: absolute !important;;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}
	.header-shape-4 {
		position: absolute !important;;
		top: 0;
		right: -150px;
	}
`
