import React, { ReactChild } from 'react';
import styled from 'styled-components';
import video from '../assets/videos/snow3.mp4';

const StyledContainer = styled.div`
	position: fixed;
  height: 100%;
	margin: 0;
	padding: 0;
`;

const Flare = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 255, .15);
`;

interface IProps {
	children: ReactChild[] | ReactChild
}

export default function Video (props:IProps):JSX.Element {
	return (
		<StyledContainer>
			<Flare />
			<video
				style={{
					width: '100vw'
				}}
				autoPlay
				loop
				muted
				preload='auto'
			>
				<source src={video} type='video/mp4' />
			</video>
			{props.children}
		</StyledContainer>
	);
}
