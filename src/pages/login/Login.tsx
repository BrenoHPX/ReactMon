import { Button, Paper, TextField, Typography } from '@mui/material'
import { url } from 'inspector'
import Box from '../../shared/components/box/Box'
import Container from '../../shared/components/container/Container'
import Form from '../../shared/components/form/Form'
import paperSx from '../../shared/styles/mui/sx/paper/PaperSx'

function Login(): JSX.Element {
	return (
		<Container>
			<Paper elevation={20} sx={paperSx}>
				<Box>
					<div />
				</Box>
				<Box>
					<Form>
						<Typography variant='h4'>Login</Typography>
						<TextField
							variant='standard'
							label='E-mail'
							fullWidth
						/>
						<TextField variant='standard' label='Senha' fullWidth />
						<Button variant='contained' type='submit' fullWidth>
							Entrar
						</Button>
						<Button variant='outlined' type='submit' fullWidth>
							Cadastre-se
						</Button>
					</Form>
				</Box>
			</Paper>
		</Container>
	)
}

export default Login
