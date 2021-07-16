import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background: rgba(0,0,0,.8);
	height: 100px;

	a {
		text-decoration: none;
		color: white;
	}

	a:active, a:visited {
		text-decoration: none;
		color: white;
	}

	& nav {
		height: 100%;
	}
`;

const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	list-style: none;
`;

const StyledLi = styled.li`
	font-family: 'Trajan';
	border: 1px solid white;
	margin: 0 15px;
	box-sizing: border-box;
	cursor: pointer;
	padding: 16px 24px;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
	transition: opacity .3s;

	&:hover,
	&:focus {
		opacity: .5;
	}
`;

export default function Header():JSX.Element {
	return (
		<>
			<StyledHeader>
				<nav>
					<StyledUl>
						<StyledLi>Home</StyledLi>
						<StyledLi>Sobre nós</StyledLi>
						<StyledLi>Produtos</StyledLi>
						<StyledLi as={'a'} href={'https://www.linkedin.com/in/andré-lopes-08'} target={'_blank'}>Contato</StyledLi>
					</StyledUl>
				</nav>
			</StyledHeader>
		</>
	);
}