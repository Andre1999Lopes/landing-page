import React, { ReactChild } from 'react';
import styled from 'styled-components';
import video from '../assets/videos/snow3.mp4';

const StyledContainer = styled.div`
	position: relative;
  height: 100%;
  overflow: hidden;
	margin: 0;
	padding: 0;
`;

interface IProps {
	children: ReactChild[] | ReactChild
}

export default function Video (props:IProps):JSX.Element {
	return (
		<StyledContainer>
			<video
				style={{
					width: '100vw'
				}}
				autoPlay
				loop
				muted
			>
				<source src={video} type='video/mp4' />
			</video>
			{props.children}
		</StyledContainer>
	);
}
