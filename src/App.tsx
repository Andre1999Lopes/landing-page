import React, { ChangeEvent, useState, useRef } from 'react';
import Timer from './components/Timer';
import Header from './components/Header';
import Video from './components/Video';
import Input from './components/Input';
import Button from './components/Button';
import Snackbar from './components/Snackbar';
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
	width: 40%;
	padding: 2rem;
	background-color: #646363;
	box-shadow: 0 0 .4rem .4rem #444444;
	margin: 2rem auto;
	border-radius: 15px;
`;

const StyledTitle = styled.p`
	font-family: 'Trajan';
	font-size: 50px;
	width: 40%;
	text-align: center;
	margin: 0.5em auto 1.2em;
`;

const StyledP = styled.p`
	font-family: 'Trajan';
	text-align: center;
	margin: 1em auto 1.5em;
	font-size: 200%;
`;

function App():JSX.Element {
	const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const nameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [isActive, setIsActive] = useState(false);
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [message, setMessage] = useState('');

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
			setMessage('Email Enviado!');
			setIsActive(true);
			setTimeout(() => {
				setIsActive(false);
			}, 3000);
			setLocalStorage('userEmail', emailInputRef.current.value);
			setLocalStorage('userName', nameInputRef.current.value);
			console.log(localStorage.getItem('userEmail'));
			console.log(localStorage.getItem('userName'));
		}
		else {
			setMessage('Preencha os campos!');
			setIsActive(true);
			setTimeout(() => {
				setIsActive(false);
			}, 3000);
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
						<StyledP style={{marginTop: '1.8em'}}>Até 80% de desconto em todas as filiais de Westeros!</StyledP>
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
						<Snackbar
							message={message}
							isActive={isActive}	
						/>
					</StyledContent>
				</Video>
			</div>
		</>
	);
}

export default App;
