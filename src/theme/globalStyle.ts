import { createGlobalStyle } from 'styled-components';
import Font from '../assets/fonts/Trajan_Pro.otf';

const globalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
	}

	body {
		@font-face {
			font-family: 'Trajan';
			src: url(${Font});
		};
		color: white;
		height: 100vh;
		overflow-y: hidden;
	}
`;

export default globalStyle;