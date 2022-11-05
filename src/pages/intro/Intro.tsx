// import { useEffect } from 'react'
import { Grid } from '@mui/material'
import Container from '../../shared/components/container/Container'
import './intro.css'
import MainTitleStyle from './MainTitleStyle'
// import { useNavigate } from 'react-router-dom'

function Intro(): JSX.Element {
	// const navigate = useNavigate()
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		navigate('/login')
	// 	}, 2000)
	// }, [])
	return (
		<Container>
			<MainTitleStyle>ReactMon</MainTitleStyle>
		</Container>
	)
}

export default Intro

//	color: #f0ff00 #ea1f33 #e3868f #ececec #005eff #8bb5fd #26ce00;
