import React, { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
	position: relative;
	width: 450px;
	margin: 30px auto;
	textarea {
		min-height: 150px;
	}
`;

const StyledSpan = styled.span`
	color: black;
	height: 55px;
	position: absolute;
	top: 0;
	left: 16px;
	pointer-events: none;

	display: flex;
	align-items: center;

	transform-origin: 0% 0%;
	font-size: 25px;
	font-style: normal;
	font-weight: 300%;

	transition: .1s ease-in-out;
`;

const StyledInput = styled.input<IStyledProps>`
	display: inline-block;
	padding: 5px 15px;
	outline: none;
	height: 40px;
	width: 100%;
	font-size: 15px;
	border-radius: 5px;
	border-bottom: 4px solid white;
	transition: all 300ms ease;

	&:focus {
		border-bottom: solid 4px red;
	}

	&:focus + span{
		transform: scale(.6) translateY(-10px);
	}

	${({ hasValue }) => 
		hasValue && css`
			& + span{
				transform: scale(.6) translateY(-10px);
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