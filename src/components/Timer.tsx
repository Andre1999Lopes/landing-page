import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	width: 24px;
	height: 24px;
	margin: 16px auto;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 200%;
`;

const StyledNumbers = styled.p`
	font-size: 30px;
	font-family: 'Trajan';
	color: #ac0917;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bolder;
	text-align: center;
	height: 80px;
	border-radius: 5px;
	background: rgba(255,255,255,.5);
	min-width: 80px;
	margin: 60px 5px;
`;

function Timer():JSX.Element {
	const ending = moment('26/11/2021 00:00', 'DD/MM/YYYY hh:mm');
	const initial = moment();
	const [seconds, setSeconds] = useState(ending.diff(initial, 'seconds') % 60);
	const [minutes, setMinutes] = useState(ending.diff(initial, 'minutes') % 60);
	const [hours, setHours] = useState(ending.diff(initial, 'hours') % 24);
	const [days, setDays] = useState(ending.diff(initial, 'days'));

	useEffect(() => {
		setInterval(() => {
			const initial = moment();
			setSeconds(ending.diff(initial, 'seconds') % 60);
			setMinutes(ending.diff(initial, 'minutes') % 60);
			setHours(ending.diff(initial, 'hours') % 24);
			setDays(ending.diff(initial, 'days'));
		}, 1000);
	}, []);

	return (
		<>
			<StyledWrapper>
				<StyledNumbers>
					{days < 0 ? '00' : (days < 10 ? '0' + days : days)}
				</StyledNumbers>
				<StyledNumbers>
					{hours < 0 ? '00' : (hours < 10 ? '0' + hours : hours)}
				</StyledNumbers>
				<StyledNumbers>
					{minutes < 0 ? '00' : (minutes < 10 ? '0' + minutes : minutes)}
				</StyledNumbers>
				<StyledNumbers>
					{seconds < 0 ? '00' : (seconds < 10 ? '0' + seconds : seconds)}
				</StyledNumbers>
			</StyledWrapper>
		</>
	);
}

export default Timer;