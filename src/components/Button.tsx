import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

const StyledButton = styled.p`
	width: 20%;
	margin: 1rem auto;
	padding: 0.5rem;
	background-color: white;
	color: black;
	font-family: 'Trajan';
	font-size: 1.5rem;
	font-weight: bold;
	border-radius: 5px;
	transition: all 200ms ease;
	user-select: none;

	&:hover {
		cursor: pointer;
		background-color: darkgrey;
	}

	&:active {
		background-color: grey;
	}
`;

interface IProps {
	onClick: MouseEventHandler<HTMLParagraphElement>
}

export default function Button (props:IProps):JSX.Element {
	return (
		<StyledButton onClick={props.onClick}>Receba todas as ofertas!</StyledButton>
	);
}