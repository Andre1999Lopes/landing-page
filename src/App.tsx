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
	overflow-y: auto;
`;

const StyledWrapper = styled.div`
	width: 480px;
	padding: 30px;
	background-color: #646363;
	box-shadow: 0px 0px 5px 5px #444444;
	margin: 20px auto;
	border-radius: 15px;
`;

const StyledTitle = styled.p`
	font-family: 'Trajan';
	font-size: 50px;
	width: 40%;
	text-align: center;
	margin: 20px auto 60px;
`;

const StyledP = styled.p`
	font-family: Trajan;
	text-align: center;
	margin: 20px auto 60px;
	font-size: 200%;
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
			console.log(localStorage.getItem('userName'));
		}
	};

	return (
		<>
			<GlobalStyle />
			<div className="App">
				<Video>
					<StyledContent>
						<Header />
						<StyledTitle>{'A Black Friday\nestá chegando'}</StyledTitle>
						<Timer />
						<StyledP>Até 80% de desconto em todas as filiais de Westeros!</StyledP>
						<StyledWrapper>
							<StyledP style={{fontSize:'100%'}}>Quer receber notificações sobre as ofertas antes de todos? Deixe seu e-mail abaixo que nós enviaremos!</StyledP>
							<Input
								reference={nameInputRef}
								name={'name'}
								value={nameValue}
								placeholder={'Nome completo'}
								onChange={handleChange}
							/>
							<Input
								reference={emailInputRef}
								name={'email'}
								value={emailValue}
								placeholder={'Email'}
								onChange={handleChange}
							/>
						</StyledWrapper>
						<Button onClick={handleClick} ></Button>
					</StyledContent>
				</Video>
			</div>
		</>
	);
}

export default App;
