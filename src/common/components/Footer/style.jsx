import styled from 'styled-components'

export const StyledFooter = styled.footer`
	width: 100%;
	display: flex;
	padding: 100px 0;
	background-color: ${props => props.theme.black};
	background-image: linear-gradient(-144deg, #322B48 7%, #1B152D 100%);
	color: ${props => props.theme.white};

	.footer-inner {
		padding: 15px 1rem;
	}
`
