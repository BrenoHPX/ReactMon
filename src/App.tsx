import { ThemeProvider } from '@mui/material'
import theme from './config/theme/theme'
import GlobalStyle from './config/GlobalStyle'
import Routes from './routes/Routes'

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	)
}

export default App
