import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 15%;

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
	margin: 0 25px;
	box-sizing: border-box;
	background-color: #00003a;
	cursor: pointer;
	padding: 16px 24px;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
	transition: opacity .3s;

	&:hover,
	&:focus {
		opacity: .6;
	}
`;

export default function Header():JSX.Element {
	return (
		<>
			<StyledHeader>
				<Logo />
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