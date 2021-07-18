import React from 'react';
import svg from '../assets/svg/logo.svg';
import styled from 'styled-components';

const Img = styled.img`
	display: inline-block;
	margin: 8px;
`;

export default function Logo ():JSX.Element {
	return (
		<Img 
			src={svg}
			alt='logo'
			style = {{
				width: '8%'
			}}
		/>
	);
}

