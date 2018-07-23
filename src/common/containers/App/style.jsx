import styled from 'styled-components'

export const PageLayout = styled.div`
	height: 100%;
	
	.headroom-menu {
		opacity: 1;
	}
	
	.headroom-menu .headroom--unfixed {
		transform: translateY(-100%) !important;
		transition: all 0.2s ease-in-out;
		opacity: 0;
	}

	.pushable {
		display: initial;
		height: 100%;
		overflow-x: hidden;
		padding: 0;
		transform: translate3d(0, 0, 0);
	}

	.main-layout {
		min-height: calc(100% - 72px);
		display: flex;
		flex-direction: column;
		color: ${props => props.theme.black};
		background-color: ${props => props.theme.white};

		> .main-content {
			flex-grow: 1;
			min-height: calc(100% - 72px);
			display: flex;
			flex-direction: column;

			> .main-container {
				padding-left: 1rem;
				padding-right: 1rem;
				margin-top: 2em;
				margin-bottom: 1em;
				flex-direction: column;
				display: flex !important;
				flex-grow: 1;
				& > *:last-child {
					flex-grow: 1;
				}
			}
		}
	}
`
