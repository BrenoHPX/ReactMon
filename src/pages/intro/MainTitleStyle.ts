import styled from 'styled-components'

const MainTitleStyle = styled.div`
	@keyframes pokemonTitleAnimation {
		0% {
			font-size: 0em;
		}
		100% {
			font-size: 10em;
		}
	}

	color: #ffcb05;
	text-shadow: 2px 0 5px #002f75, -2px 0 #002f75, 0 2px #002f75,
		0 -2px #002f75, 1px 1px #002f75, -1px -1px #002f75, 1px -1px #002f75,
		-1px 1px #002f75, 10px 10px 10px #000;

	font-family: 'pokemonSolid';
	font-size: 10em;
	animation: pokemonTitleAnimation ease-out 1s 1;
`

export default MainTitleStyle
