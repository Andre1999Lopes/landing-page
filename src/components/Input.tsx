import React, { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
	position: relative;
	width: 80%;
	margin: 2rem auto;
	textarea {
		min-height: 150px;
	}
`;

const StyledSpan = styled.span`
	color: black;
	height: 2.8em;
	position: absolute;
	top: 0;
	left: 1em;
	pointer-events: none;
	display: flex;
	align-items: center;
	transform-origin: 0% 0%;
	font-size: 25px;
	font-style: normal;
	transition: .1s ease-in-out;
`;

const StyledInput = styled.input<IStyledProps>`
	box-sizing: border-box;
	background-color: darkgray;
	display: inline-block;
	padding: 1em 1.5em;
	outline: none;
	height: 60px;
	width: 100%;
	font-size: 15px;
	border-radius: 5px;
	border: none;
	border-bottom: 4px solid darkgray;
	transition: all 300ms ease;
	margin: 0.3em auto;

	&:focus {
		border-bottom: solid 4px #ac0917;
	}

	&:focus + span{
		transform: scale(.6) translateY(-0.5em);
	}

	${({ hasValue }) => 
		hasValue && css`
			& + span{
				transform: scale(.6) translateY(-0.5em);
			}
		`
}

`;

interface IStyledProps {
	hasValue: boolean
}

interface IFunctionProps {
	reference: React.MutableRefObject<HTMLInputElement>,
	placeholder: string,
	value: string,
	name: string,
	onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input (props:IFunctionProps):JSX.Element {
	const hasValue = Boolean(props.value);

	return (
		<>
			<StyledWrapper>
				<label>
					<StyledInput
						ref={props.reference}
						hasValue={hasValue}
						onChange={props.onChange}
						value={props.value}
						name={props.name}
						autoComplete={'off'}
					/>
					<StyledSpan>{props.placeholder}</StyledSpan>
				</label>
			</StyledWrapper>
		</>
	);
}