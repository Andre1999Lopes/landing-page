import React, { ChangeEvent, useState, useRef } from 'react';
import Timer from './components/Timer';
import Header from './components/Header';
import Video from './components/Video';
import Input from './components/Input';
import Button from './components/Button';
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import { setLocalStorage } from './localStorage/index';

const StyledContent = styled.div`
	position: absolute;
  top: 0;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  padding: 0;
	text-align: center;
`;

const StyledP = styled.p`
	font-family: 'Trajan';
	font-size: 50px;
	width: 40%;
	text-align: center;
	margin: 20px auto;
`;

function App():JSX.Element {
	const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const nameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');

	const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
		if (e.target.name == 'email') {
			setEmailValue(e.target.value);
		}
		else if (e.target.name == 'name') {
			setNameValue(e.target.value);
		}
	};

	const handleClick = () => {
		if (emailInputRef.current.value && nameInputRef.current.value){
			setLocalStorage('userEmail', emailInputRef.current.value);
			setLocalStorage('userName', nameInputRef.current.value);
			console.log(localStorage.getItem('userEmail'));
		}
	};

	return (
		<>
			<GlobalStyle />
			<div className="App">
				<Video>
					<StyledContent>
						<Header />
						<StyledP>{'A Black Friday\nestá chegando'}</StyledP>
						<Timer />
						{/* <StyledWrapper> */}
						{/* <label> */}
						<Input
							reference={nameInputRef}
							name={'name'}
							value={nameValue}
							placeholder={'Nome completo'}
							onChange={handleChange}
						/>
						{/* <StyledSpan>Nome completo</StyledSpan>
							</label> */}
						{/* </StyledWrapper>
						<StyledWrapper> */}
						{/* <label> */}
						<Input
							reference={emailInputRef}
							name={'email'}
							value={emailValue}
							placeholder={'Email'}
							onChange={handleChange}
						/>
						{/* <StyledSpan>Email</StyledSpan> */}
						{/* </label> */}
						{/* </StyledWrapper> */}
						{/* <StyledButton onClick={handleClick} /> */}
						<Button onClick={handleClick} ></Button>
					</StyledContent>
				</Video>
			</div>
		</>
	);
}

export default App;
