import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Intro from '../pages/intro/Intro'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Notfound from '../pages/404/NotFound'

function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro />}></Route>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/register' element={<Register />}></Route>
				<Route path='/*' element={<Notfound />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
