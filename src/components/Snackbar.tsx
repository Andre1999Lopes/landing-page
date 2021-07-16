import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	font-family: 'Trajan';
	visibility: hidden;
  min-width: 15%;
  background-color: darkgray;
  color: black;
  text-align: center;
  border-radius: 20px;
  padding: 1rem;
  position: fixed;
  z-index: 1;
  left: 75%;
  bottom: 2rem;
  font-size: 1rem;

	&.show {
		visibility: visible;
		animation: fadein 0.5s, fadeout 0.5s 2.5s;
	}

	@keyframes fadein {
		from {bottom: 0; opacity: 0;}
		to {bottom: 2rem; opacity: 1;}
	}

	@keyframes fadeout {
		from {bottom: 2rem; opacity: 1;}
		to {bottom: 0; opacity: 0;}
	}
`;

interface IProps {
	message: string,
	isActive: boolean
}

export default function Snackbar({ message, isActive }:IProps):JSX.Element {
	return(
		<StyledDiv className={ isActive ? 'show' : '' }>
			{message}
		</StyledDiv>
	);
}