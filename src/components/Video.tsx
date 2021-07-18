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

const StyledVideo = styled.video`
	@media (max-width: 768px) {
		height: 100vh;
		z-index: 0;
	}

	@media (min-width: 1000px) {
		width: 100vw;
	}
`;

interface IProps {
	children: ReactChild[] | ReactChild
}

export default function Video (props:IProps):JSX.Element {
	return (
		<StyledContainer>
			<Flare />
			<StyledVideo
				autoPlay
				loop
				muted
				preload='auto'
			>
				<source src={video} type='video/mp4' />
			</StyledVideo>
			{props.children}
		</StyledContainer>
	);
}
